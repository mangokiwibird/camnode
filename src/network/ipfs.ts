import { FsBlockstore } from "blockstore-fs"
import fs from "fs"

const createNode = async () => {
    const { createHelia } = await import("helia")
    const { unixfs } = await import("@helia/unixfs")

    const blockstore = new FsBlockstore("./ipfs-storage/")

    const helia = await createHelia({
        blockstore
    })

    const helia_fs = unixfs(helia)

    return helia_fs
}

export async function upload_file(uuid: string) {
    const helia_fs = await createNode()

    const buffer = fs.readFileSync(`dummy/${uuid}.txt`)
    return await helia_fs.addBytes(buffer)
}