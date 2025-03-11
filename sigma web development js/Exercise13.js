function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let viewstr;
    if (views < 100000) {
        viewstr = (views / 1000).toFixed(1) + "K";
    } else if (views >= 1000000) {
        viewstr = (views / 1000000).toFixed(1) + "M";
    } else {
        viewstr = (views / 1000).toFixed(1) + "K";
    }

    let html = `
    <div class="card">
        <div class="image" style="position: relative;">
            <img src="${thumbnail}" alt="Thumbnail">
            <div class="time" style="position: absolute; bottom: 10px; right: 10px; background: black; color: white; padding: 2px 5px; border-radius: 5px;">
                ${duration}
            </div>
        </div>
        <div class="text">
            <div class="title">
                <h2>${title}</h2>
            </div>
            <div class="cap">
                <p>${cName} • ${viewstr} views • ${monthsOld} months ago</p>
            </div>
        </div>
    </div>`;

    document.querySelector(".container").insertAdjacentHTML('beforeend', html);
}

createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVr
