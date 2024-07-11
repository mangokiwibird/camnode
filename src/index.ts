import { create_timestamp, pick_random } from "./util"
import { add_to_database } from "./network/hashmanager"
import { upload_file } from "./network/ipfs"

import chokidar from 'chokidar'
import fs from 'fs'

const watcher = chokidar.watch('movenet_image/', {ignored: /^\./, persistent: true});
watcher.on('add', async (path) => {
    const file_name = path.split("\\")[1]
    const split_metadata = file_name.split("_")

    const uuid = split_metadata[0]
    const action = split_metadata[1]
    const status = split_metadata[2].split(".")[0]
    const timestamp = create_timestamp()
    const cid = await upload_file(path)

    add_to_database(cid.toString(), action, status, timestamp)

    setTimeout(() => {
        fs.rmSync(path)
    }, 5000)
})



// async function main() {
//     for (let i = 0; i < 10; i++) {
//         const uuid = create_test_file()
//         const cid = upload_file(uuid)
        
//         const random_action = pick_random(["bathroom", "dining_room", "kitchen", "living_room"])
//         const random_status = pick_random(["lying", "sitting", "standing", "running"])
//         const timestamp = create_timestamp()
        
//         add_to_database(cid.toString(), random_action, random_status, timestamp)
        
//         console.log(cid)
//     }
// }

// main()