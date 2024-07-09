import { v4 as uuidv4 } from "uuid"
import fs from "fs"

export function create_test_file() {
    const uuid = uuidv4()

    fs.appendFileSync(`dummy/${uuid}.txt`, uuid)

    return uuid
}