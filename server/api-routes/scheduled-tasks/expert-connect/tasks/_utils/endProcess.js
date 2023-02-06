import process from 'process';
import dotenv from 'dotenv'

dotenv.config()

export const endProcess = (res) =>{
  if(res)
    res.send("Submission Success")
  else 
    process.exit(0)
}