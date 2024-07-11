import { FsBlockstore } from "blockstore-fs"
import { FsDatastore } from "datastore-fs"
import fs from "fs"
import { CID } from "multiformats/cid"

async function createNode() {
    const { createHelia } = await import("helia")

    const blockstore = new FsBlockstore("./ipfs-storage/")
    const datastore = new FsDatastore("./ipfs-datastore")

    const helia = await createHelia({
        blockstore,
        datastore
    })
    
    return helia
}

export async function upload_file(path: string): Promise<CID> {
    const { unixfs } = await import("@helia/unixfs")
    
    const helia = await createNode()
    const helia_fs = unixfs(helia)

    const buffer = fs.readFileSync(path)
    const cid = await helia_fs.addBytes(buffer)

    helia.stop()

    return cid
}