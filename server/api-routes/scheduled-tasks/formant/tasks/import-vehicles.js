import express from "express";
import fetch from 'node-fetch'
import { client } from  '../../../../database/postgres/connection.js'
import { getVehicles } from '../../../_utils/services/formant/getVehicles.js';
import { getVehicle } from '../../../_utils/services/formant/getVehicle.js'

const router = express.Router();

export const importVehicles =  async (res) => {
    try{
        const devices = await getVehicles()
        const vehicles = await getVehicle(devices) 

        vehicles.forEach(async device => {
            const deviceValueInsert = `('${device.id}','${device.name}', ${!device.enabled})`
            await client.query(
                `INSERT INTO vehicles.vehicle (device_id, name, decommissioned)
                    VALUES ${deviceValueInsert}
                    ON CONFLICT (device_id, name) 
                    DO UPDATE SET decommissioned = ${!device.enabled}

                    RETURNING *
                `
                ,[])

            if( device.tags && (device.tags.group ||  device.tags.Group) ){
                await client.query(
                    `INSERT INTO vehicles.vehicle_group(vehicle_id, group_id)
                        VALUES (
                            (select id from vehicles.vehicle where device_id = $1),
                            (select id from vehicles.group where name = $2)
                        )
                        ON CONFLICT (vehicle_id) 
                        DO UPDATE SET group_id = (select id from vehicles.group where name = $2)
        
                        RETURNING *
                    `
                    ,[
                        device.id
                        ,device.tags.Group  || device.tags.group
                    ])
            }
        })

        if(res)
            res.send("Submission Success")
        else 
            process.exit(0)

    } catch (e) {
        console.log(e)

        if(res)
            res.send("Submission Failed")
        else 
            process.exit(1)
    }
}