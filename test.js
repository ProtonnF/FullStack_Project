const axios = require("axios");

async function runTest() {
    const studentEmail = "hani0024@algonquinlive.com";
    const testName = "getAll to show all product";
    const url ="https://your-project-name.onrender.com/products";

    try {
        const response = await axios.get(url);
        if (response.status === 200) {
            console.log(`${studentEmail} - ${testName} - 200 - PASSED`);
        } else {
            console.log(`${studentEmail} - ${testName} - ${response.status} - FAILED`);
        }
    } catch (error) {
        console.log(`${studentEmail} - ${testName} - 500 - FAILED`);
    }
}

runTest();