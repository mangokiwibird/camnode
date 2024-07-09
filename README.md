# CAMNODE
Upload to IPFS and request add to hashmanager

## Explanation
```typescript
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
```

1. Creates a random uuid.
2. Makes a file `<uuid>.txt` with content `<uuid>`. This is for testing purposes, which will be replaced by real images at runtime
3. Uploads the file to ipfs
4. Sends the hash with the metadata to the `hashmanager`
5. Prints the CID for debugging