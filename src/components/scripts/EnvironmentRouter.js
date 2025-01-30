import fs from "fs/promises";
import path from "path";

const devDir = "./dist";
const prodDir = ".";

/**
* @param {string} filename
* @returns {Promise<string>}
*/

const getFilePath = async (filename) => {
    const devFilePath = path.resolve(devDir, filename);
    const prodFilePath = path.resolve(prodDir, filename);

    try {
        await fs.access(devFilePath);
        return devFilePath;
    } catch {
        return prodFilePath;
    }
};

export default getFilePath;