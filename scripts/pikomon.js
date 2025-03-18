import {database} from "./database.js"

export const pikomonRender = () => {
    let HTMLString = ""
    for (const obj of database) {
        HTMLString += `
        <div class="piko-card">
            <img src="${obj.imageUrl}" class="piko-img" alt="${obj.name} image">
            <div class="piko-info">
                <h2 class="piko-name">${obj.name}</h2>
                <h3 class="info-text">Category: ${obj.category}</h3>
                <h3 class="info-text">Abilities: ${obj.abilities}</h3>
                <h3 class="info-text">Weakness: ${obj.weakness}</h3>
            </div>
        </div>
        `
    }
    return HTMLString
}