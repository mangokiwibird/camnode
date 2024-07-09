import { create_test_file } from "./testfilegen"
import { create_timestamp, pick_random } from "./util"
import { add_to_database } from "./network/hashmanager"
import { upload_file } from "./network/ipfs"

async function main() {
    for (let i = 0; i < 10; i++) {
        const uuid = create_test_file()
        const cid = upload_file(uuid)
        
        const random_action = pick_random(["bathroom", "dining_room", "kitchen", "living_room"])
        const random_status = pick_random(["lying", "sitting", "standing", "running"])
        const timestamp = create_timestamp()
        
        add_to_database(cid.toString(), random_action, random_status, timestamp)
        
        console.log(cid)
    }
}

main()