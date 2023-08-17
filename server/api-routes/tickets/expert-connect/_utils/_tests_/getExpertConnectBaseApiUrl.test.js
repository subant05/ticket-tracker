import { getExpertConnectBaseApiUrl } from "../getExpertConnectBaseApiUrl.js";
import { describe, it } from "mocha";
import { expect, assert } from "chai";

describe("getExpertConnectBaseApiUrl", () => {
  it("should return url", () => {
    const url = `${process.env.EXPERT_CONNECT_REQUEST_URL}/${process.env.EXPERT_CONNECT_COMPANY_ID}`;
    const parsed = getExpertConnectBaseApiUrl({});

    expect(parsed.request).to.not.be.undefined;
    expect(parsed.request).to.not.be.null;
    expect(parsed.request.baseUrl).to.not.be.undefined;
    expect(parsed.request.baseUrl).to.not.be.null;
    expect(parsed.request.baseUrl).to.equal(url);
  });
});
