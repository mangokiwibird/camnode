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