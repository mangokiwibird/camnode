import mqtt from "mqtt"

export function add_to_database(hash: string, action: string, status: string, timestamp: string) {
    const client = mqtt.connect("mqtt://localhost")

    client.on("connect", () => {
        client.publish("rne/camnode/hashmanager/add_to_database", `${hash}/${action}/${status}/${timestamp}`)
        console.log("successfully requested add_to_database")
    })
}

