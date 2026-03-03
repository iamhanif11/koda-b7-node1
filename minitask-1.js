import dateConversion from "./minitask-1.js";
import { createInterface } from "readline";

function askQuestion(question) {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question(question, (date) => {
            rl.close();
            resolve(date);
        });
    });
}

async function main() {
    const date = await askQuestion("Masukkan tanggal: ");
    console.log(dateConversion(date));
}

main();