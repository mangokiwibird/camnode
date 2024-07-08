import { create_test_file } from "./testfilegen"
import fs from "fs"
import { create_timestamp, pick_random } from "./util"
import { add_to_database } from "./mqtt"


const createNode = async () => {
    const { createHelia } = await import("helia")
    const { unixfs } = await import("@helia/unixfs")

    const helia = await createHelia()
    const helia_fs = unixfs(helia)

    return helia_fs
}

for (let i = 0; i < 30; i++) {
    (async () => {
        const helia_fs = await createNode()
    
        const uuid = create_test_file()
    
        const buffer = fs.readFileSync(`${uuid}.txt`)
    
        const cid = await helia_fs.addBytes(buffer)
    
        const random_action = pick_random(["bathroom", "dining_room", "kitchen", "living_room"])
        const random_status = pick_random(["lying", "sitting", "standing", "running"])
        const timestamp = create_timestamp()
    
        add_to_database(cid.toString(), random_action, random_status, timestamp)
    
        console.log(cid)
    })()
}