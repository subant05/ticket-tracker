import { Buffer } from "buffer";
import { deflateSync, inflateSync } from "zlib";
import fetch from "node-fetch";
import dotenv from "dotenv";
import process from "process";
import { refreshToken } from "../../authentication/formantAuth.js";
import { getViews } from "./getViews.js";

export function serializeHash(value) {
  return deflateSync(Buffer.from(JSON.stringify(value), "utf8")).toString(
    "base64"
  );
}

export function deserializeHash(value) {
  return JSON.parse(inflateSync(Buffer.from(value, "base64")).toString("utf8"));
}

export async function getShareLink(share, view) {
  let formantLink = "";

  try {
    if (!share || !view)
      throw new Error(
        "Arguments share and view must be passed to createShareLink"
      );

    const isTokenValid = await refreshToken();

    if (!isTokenValid.success) throw new Error("Unable to log into Formant");

    const views = await getViews();
    const selectedView = views.filter((_) => _.name === view);

    if (selectedView.length === 0)
      throw new Error("View does not exist or it is misspell");

    const response = await fetch(
      `${process.env.FORMANT_API_URL}/v1/admin/shares`,
      {
        method: "POST",
        body: JSON.stringify(share),
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          Authorization: `Bearer ${process.env["FORMANT_REFRESH_TOKEN"]}`,
        },
      }
    );

    const origin = process.env.FORMANT_API_URL.replace("api", "app");
    const shareData = await response.json();
    console.log(shareData);

    formantLink = `${origin}/shares/${shareData.code}#${serializeHash({
      viewId: selectedView[0].id,
    })}`;
  } catch (e) {
    console.log("FAILED TO CREATE FORMANT SHARE LINK", e.message);
    console.log("FAILED TO CREATE FORMANT SHARE LINK", e.stack);
  } finally {
    return formantLink;
  }
}
