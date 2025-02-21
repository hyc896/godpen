// 初始化 WebSocket 连接
const ws = new WebSocket("ws://localhost:8766");

ws.onopen = () => {
    console.log("WebSocket 连接已建立");
};

ws.onclose = () => {
    console.log("WebSocket 连接已关闭");
};

ws.onerror = (error) => {
    console.error("WebSocket 错误：", error);
};

// 发送消息
const sendMessage = () => {
    const input = document.getElementById("input");
    const message = input.value;
    if (message.trim() !== "") {
        ws.send(message);
        input.value = "";
    }
};

// 接收消息
ws.onmessage = (event) => {
    const messagesDiv = document.getElementById("messages");
    const userMessage = document.getElementById("input").value;
    const userMsgDiv = document.createElement("div");
    userMsgDiv.textContent = `用户: ${userMessage}`;
    messagesDiv.appendChild(userMsgDiv);
    const aiMsgDiv = document.createElement("div");
    aiMsgDiv.textContent = `AI: ${event.data}`;
    messagesDiv.appendChild(aiMsgDiv);
};

// 发送按钮事件监听
const sendButton = document.getElementById("send-button");
sendButton.addEventListener("click", sendMessage);

// 回车键事件监听
const input = document.getElementById("input");
input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        sendMessage();
    }
});
