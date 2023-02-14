/* Replace with your SQL commands */
CREATE OR REPLACE FUNCTION tickets.insert_tickets (obj text)
RETURNS text
AS $$
BEGIN
   WITH ins_formant AS (
        INSERT INTO tickets.formant
          (
            type,
            formant_id,
            message,
            severity,
            stream_name,
            stream_type,
            tags,
            value,
            time,
            url,
            device_id,
            bundle,
            vadc_diagnostics,
            device_name,
            vehicle_id
          )
	   		select
				 t->>'eventType',
				 t->>'id',
				 t->>'message',
				 t->>'severity',
				 t->>'streamName',
				 t->>'streamType',
				 t->>'tags',
				 t->>'value',
				 to_timestamp(t->>'time', 'YYYY-MM-DD HH24:MI:ss'), 
				 t->>'sourceUrl',
				 t->>'deviceId',
				 CAST(t -> 'bundle' as INT),
				 t->>'vadcDiagnostics',
				 t->'device'->>'name',
				 (select vehicles.vehicle.id as vehicle_id 
				  from vehicles.vehicle 
				  where device_id = t->>'deviceId'
				 )
			from jsonb_array_elements(obj::jsonb) t
          
          	RETURNING *
        ),
        
        ins_expert_connect AS (
          INSERT INTO tickets.expert_connect
          (
            vehicle_id,
            title,
            description,
            product,
            machine_hours,
            serial_number,
            misc,
            resolution,
            contact_id,
            advisor_id,
            team_id,
            bundle,
            ec_id
          )
			select
				(select vehicles.vehicle.id as vehicle_id from vehicles.vehicle where device_id = t->>'deviceId'),
				t->'expertConnectTicket'->'data'->>'title',
				t->'expertConnectTicket'->'data'->>'description',
				t->'expertConnectTicket'->'data'->>'product',
				t->'expertConnectTicket'->'data'->>'machineHours',
				t->'expertConnectTicket'->'data'->>'serialNumber',
				t->'expertConnectTicket'->'data'->>'misc',
				t->'expertConnectTicket'->'data'->>'resolution',
				(select personnel.expert_connect_contacts.id as contact_id
				 from personnel.expert_connect_contacts 
				 where ec_id = t->'expertConnectTicket'->'data'->'customer'->>'id'),
				(select personnel.expert_connect_advisors.id as advisor_id
				 from personnel.expert_connect_advisors 
				 where ec_id = t->'expertConnectTicket'->'data'->'advisor'->>'id'),
				(select personnel.expert_connect_teams.id as team_id
				 from personnel.expert_connect_teams 
				 where ec_id = t->'expertConnectTicket'->'data'->'team'->>'id'),
				 CAST(t -> 'bundle' as INT),
				t->'expertConnectTicket'->'data'->>'id'
			from jsonb_array_elements(obj::jsonb) t
          
          RETURNING *
        ),

        ins_jira AS (
          INSERT INTO tickets.jira
          (
           jira_ticket,
           jira_id,
           project,
           description,
           summary,
           category,
           requirement,
           bundle,
           machine_type,
           priority,
           roadmap_item,
           team_id,
           formant_link,
           expert_connect_link,
           issue_type,
           bug_source
          )
          select
			    t->'jiraTicket'->'key',
				CAST(t->'jiraTicket'->>'id' as BIGINT),
				t->'jiraTicket'->>'project',
				t->'jiraTicket'->'fields'->>'description',
				t->'jiraTicket'->'fields'->>'summary',
				t->'jiraTicket'->>'category',
				t->'jiraTicket'->>'requirement',
				CAST(t -> 'bundle' as INT),
				t->'jiraTicket'->>'machine_type',
				t->'jiraTicket'->>'priority',
				t->'jiraTicket'->>'roadmap_item',
				(select personnel.jira_teams.id as team_id from personnel.jira_teams where name = t->'jiraTicket'->>'team'),
				t->>'formantUrl',
				t->'expertConnectUrl',
				t->'jiraTicket'->>'issue_type',
				t->'jiraTicket'->>'bug_source'
			from jsonb_array_elements(obj::jsonb) t
          
          RETURNING *
        )
			INSERT INTO tickets.connection (
			  formant_id,
			  jira_id,
			  expert_connect_id
			) VALUES (
			  (select ins_formant.id from ins_formant),
			  (select ins_jira.id from ins_jira),
			  (select ins_expert_connect.id from ins_expert_connect)
			);

			
		RETURN 'DONE';
END;
$$ 
LANGUAGE plpgsql;