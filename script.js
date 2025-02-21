// WebSocket消息处理
let currentResponseContainer = null;

// 统一的WebSocket消息处理
websocket.onmessage = function(e) {
    if (!currentResponseContainer) return;
    
    // 追加流式内容
    currentResponseContainer.innerHTML += e.data;
    
    // 自动滚动到最新消息
    currentResponseContainer.scrollIntoView({ behavior: 'smooth' });
}
>>>>>>> REPLACE>

// WebSocket消息处理
let currentResponseContainer = null;

websocket.onmessage = function(e) {
    if (!currentResponseContainer) return;
    
    // 追加流式内容
    currentResponseContainer.innerHTML += e.data;
    
    // 自动滚动到最新消息
    currentResponseContainer.scrollIntoView({ behavior: 'smooth' });
}
>>>>>>> REPLACE>

// WebSocket消息处理
let currentResponseContainer = null;

websocket.onmessage = function(e) {
    if (!currentResponseContainer) return;
    
    // 追加流式内容
    currentResponseContainer.innerHTML += e.data;
    
    // 自动滚动到最新消息
    currentResponseContainer.scrollIntoView({ behavior: 'smooth' });
}
>>>>>>> REPLACE>

websocket.onmessage = function(e) {
    if (!currentResponseContainer) return;
    
    // 追加流式内容
    currentResponseContainer.innerHTML += e.data;
    
    // 自动滚动到最新消息
    currentResponseContainer.scrollIntoView({ behavior: 'smooth' });
}
>>>>>>> REPLACE>

// WebSocket消息处理
let currentResponseContainer = null;

websocket.onmessage = function(e) {
    // 创建新消息组
    const messageGroup = document.createElement('div');
    messageGroup.className = 'message-group';
    
    // 创建AI消息容器
    const aiMessage = document.createElement('div');
    aiMessage.className = 'ai-message';
    
    // 创建响应容器
    currentResponseContainer = document.createElement('div');
    currentResponseContainer.className = 'ai-response';
    
    // 添加到消息流
    document.getElementById('chat-stream').appendChild(messageGroup);
    messageGroup.appendChild(aiMessage);
    aiMessage.appendChild(currentResponseContainer);
    
    // 追加流式内容
    currentResponseContainer.innerHTML += e.data;
    
    // 添加间隔
    const spacer = document.createElement('div');
    spacer.className = 'message-spacer';
    messageGroup.appendChild(spacer);
}

// 当用户发送新消息时
function sendMessage() {
    const chatStream = document.getElementById('chat-stream');
    const userInput = document.getElementById('user-input');
    
    // 创建消息组容器
    const messageGroup = document.createElement('div');
    messageGroup.className = 'message-group';
    
    // 创建用户消息区块
    const userMsg = document.createElement('div');
    userMsg.className = 'user-message';
    userMsg.textContent = userInput.value;
    
    // 创建专属的AI响应容器
    const aiResponseContainer = document.createElement('div');
    aiResponseContainer.className = 'ai-response';
    aiResponseContainer.id = `response-${Date.now()}`; // 唯一ID
    
    // 创建消息间隔
    const spacer = document.createElement('div');
    spacer.className = 'message-spacer';
    
    // 组装消息组
    messageGroup.appendChild(userMsg);
    messageGroup.appendChild(spacer);
    messageGroup.appendChild(aiResponseContainer);
    
    // 添加到消息流顶部
    chatStream.insertBefore(messageGroup, chatStream.firstChild);
    
    // 设置当前响应容器
    currentResponseContainer = aiResponseContainer;
    
    // 发送消息到WebSocket
    websocket.send(JSON.stringify({
        message: userInput.value
    }));
    
    // 清空输入框
    userInput.value = '';
}
// WebSocket消息处理
let currentResponseContainer = null;

websocket.onmessage = function(e) {
    if (!currentResponseContainer) return;
    
    // 追加流式内容
    currentResponseContainer.innerHTML += e.data;
    
    // 自动滚动到最新消息
    currentResponseContainer.scrollIntoView({ behavior: 'smooth' });
}
>>>>>>> REPLACE>

// WebSocket消息处理
let currentResponseContainer = null;

websocket.onmessage = function(e) {
    if (!currentResponseContainer) return;
    
    // 追加流式内容
    currentResponseContainer.innerHTML += e.data;
    
    // 自动滚动到最新消息
    currentResponseContainer.scrollIntoView({ behavior: 'smooth' });
}
>>>>>>> REPLACE>

websocket.onmessage = function(e) {
    if (!currentResponseContainer) return;
    
    // 追加流式内容
    currentResponseContainer.innerHTML += e.data;
    
    // 自动滚动到最新消息
    currentResponseContainer.scrollIntoView({ behavior: 'smooth' });
}
>>>>>>> REPLACE>

// WebSocket消息处理
let currentResponseContainer = null;

websocket.onmessage = function(e) {
    // 创建新消息组
    const messageGroup = document.createElement('div');
    messageGroup.className = 'message-group';
    
    // 创建AI消息容器
    const aiMessage = document.createElement('div');
    aiMessage.className = 'ai-message';
    
    // 创建响应容器
    currentResponseContainer = document.createElement('div');
    currentResponseContainer.className = 'ai-response';
    
    // 添加到消息流
    document.getElementById('chat-stream').appendChild(messageGroup);
    messageGroup.appendChild(aiMessage);
    aiMessage.appendChild(currentResponseContainer);
    
    // 追加流式内容
    currentResponseContainer.innerHTML += e.data;
    
    // 添加间隔
    const spacer = document.createElement('div');
    spacer.className = 'message-spacer';
    messageGroup.appendChild(spacer);
}

// 当用户发送新消息时
function sendMessage() {
    // 创建新消息组
    const messageGroup = document.createElement('div');
    messageGroup.className = 'message-group';
    
    // 添加用户消息
    const userMsg = document.createElement('div');
    userMsg.className = 'user-message';
    userMsg.textContent = document.getElementById('user-input').value;
    
    // 预创建AI响应区域
    const aiResponseArea = document.createElement('div');
    aiResponseArea.className = 'ai-response';
    
    // 添加到消息流
    document.getElementById('chat-stream').appendChild(messageGroup);
    messageGroup.appendChild(userMsg);
    
    // 创建间隔区域
    const spacer = document.createElement('div');
    spacer.className = 'message-spacer';
    messageGroup.appendChild(spacer);
    
    // 设置当前响应容器
    currentResponseContainer = aiResponseArea;
    
    // 发送消息后立即添加AI响应区域
    messageGroup.appendChild(aiResponseArea);
    
    // 实际发送消息逻辑
    const message = document.getElementById('user-input').value;
    websocket.send(JSON.stringify({
        message: message
    }));
    
    // 清空输入框
    document.getElementById('user-input').value = '';
}
// WebSocket消息处理
let currentResponseContainer = null;

websocket.onmessage = function(e) {
    if (!currentResponseContainer) return;
    
    // 追加流式内容
    currentResponseContainer.innerHTML += e.data;
    
    // 自动滚动到最新消息
    currentResponseContainer.scrollIntoView({ behavior: 'smooth' });
}
>>>>>>> REPLACE>

websocket.onmessage = function(e) {
    if (!currentResponseContainer) return;
    
    // 追加流式内容
    currentResponseContainer.innerHTML += e.data;
    
    // 自动滚动到最新消息
    currentResponseContainer.scrollIntoView({ behavior: 'smooth' });
}
>>>>>>> REPLACE>

// WebSocket消息处理
let currentResponseContainer = null;

websocket.onmessage = function(e) {
    // 创建新消息组
    const messageGroup = document.createElement('div');
    messageGroup.className = 'message-group';
    
    // 创建AI消息容器
    const aiMessage = document.createElement('div');
    aiMessage.className = 'ai-message';
    
    // 创建响应容器
    currentResponseContainer = document.createElement('div');
    currentResponseContainer.className = 'ai-response';
    
    // 添加到消息流
    document.getElementById('chat-stream').appendChild(messageGroup);
    messageGroup.appendChild(aiMessage);
    aiMessage.appendChild(currentResponseContainer);
    
    // 追加流式内容
    currentResponseContainer.innerHTML += e.data;
    
    // 添加间隔
    const spacer = document.createElement('div');
    spacer.className = 'message-spacer';
    messageGroup.appendChild(spacer);
}

// 当用户发送新消息时
function sendMessage() {
    // 创建新消息组
    const messageGroup = document.createElement('div');
    messageGroup.className = 'message-group';
    
    // 添加用户消息
    const userMsg = document.createElement('div');
    userMsg.className = 'user-message';
    userMsg.textContent = document.getElementById('user-input').value;
    
    // 预创建AI响应区域
    const aiResponseArea = document.createElement('div');
    aiResponseArea.className = 'ai-response';
    
    // 添加到消息流
    document.getElementById('chat-stream').appendChild(messageGroup);
    messageGroup.appendChild(userMsg);
    
    // 创建间隔区域
    const spacer = document.createElement('div');
    spacer.className = 'message-spacer';
    messageGroup.appendChild(spacer);
    
    // 设置当前响应容器
    currentResponseContainer = aiResponseArea;
    
    // 发送消息后立即添加AI响应区域
    messageGroup.appendChild(aiResponseArea);
    
    // 实际发送消息逻辑
    const message = document.getElementById('user-input').value;
    websocket.send(JSON.stringify({
        message: message
    }));
    
    // 清空输入框
    document.getElementById('user-input').value = '';
}
websocket.onmessage = function(e) {
    if (!currentResponseContainer) return;
    
    // 追加流式内容
    currentResponseContainer.innerHTML += e.data;
    
    // 自动滚动到最新消息
    currentResponseContainer.scrollIntoView({ behavior: 'smooth' });
}
>>>>>>> REPLACE>

// WebSocket消息处理
let currentResponseContainer = null;

websocket.onmessage = function(e) {
    // 创建新消息组
    const messageGroup = document.createElement('div');
    messageGroup.className = 'message-group';
    
    // 创建AI消息容器
    const aiMessage = document.createElement('div');
    aiMessage.className = 'ai-message';
    
    // 创建响应容器
    currentResponseContainer = document.createElement('div');
    currentResponseContainer.className = 'ai-response';
    
    // 添加到消息流
    document.getElementById('chat-stream').appendChild(messageGroup);
    messageGroup.appendChild(aiMessage);
    aiMessage.appendChild(currentResponseContainer);
    
    // 追加流式内容
    currentResponseContainer.innerHTML += e.data;
    
    // 添加间隔
    const spacer = document.createElement('div');
    spacer.className = 'message-spacer';
    messageGroup.appendChild(spacer);
}

// 当用户发送新消息时
function sendMessage() {
    // 创建新消息组
    const messageGroup = document.createElement('div');
    messageGroup.className = 'message-group';
    
    // 添加用户消息
    const userMsg = document.createElement('div');
    userMsg.className = 'user-message';
    userMsg.textContent = document.getElementById('user-input').value;
    
    // 预创建AI响应区域
    const aiResponseArea = document.createElement('div');
    aiResponseArea.className = 'ai-response';
    
    // 添加到消息流
    document.getElementById('chat-stream').appendChild(messageGroup);
    messageGroup.appendChild(userMsg);
    
    // 创建间隔区域
    const spacer = document.createElement('div');
    spacer.className = 'message-spacer';
    messageGroup.appendChild(spacer);
    
    // 设置当前响应容器
    currentResponseContainer = aiResponseArea;
    
    // 发送消息后立即添加AI响应区域
    messageGroup.appendChild(aiResponseArea);
    
    // 实际发送消息逻辑
    const message = document.getElementById('user-input').value;
    websocket.send(JSON.stringify({
        message: message
    }));
    
    // 清空输入框
    document.getElementById('user-input').value = '';
}
// WebSocket消息处理
let currentResponseContainer = null;

websocket.onmessage = function(e) {
    // 创建新消息组
    const messageGroup = document.createElement('div');
    messageGroup.className = 'message-group';
    
    // 创建AI消息容器
    const aiMessage = document.createElement('div');
    aiMessage.className = 'ai-message';
    
    // 创建响应容器
    currentResponseContainer = document.createElement('div');
    currentResponseContainer.className = 'ai-response';
    
    // 添加到消息流
    document.getElementById('chat-stream').appendChild(messageGroup);
    messageGroup.appendChild(aiMessage);
    aiMessage.appendChild(currentResponseContainer);
    
    // 追加流式内容
    currentResponseContainer.innerHTML += e.data;
    
    // 添加间隔
    const spacer = document.createElement('div');
    spacer.className = 'message-spacer';
    messageGroup.appendChild(spacer);
}

// 当用户发送新消息时
function sendMessage() {
    // 创建新消息组
    const messageGroup = document.createElement('div');
    messageGroup.className = 'message-group';
    
    // 添加用户消息
    const userMsg = document.createElement('div');
    userMsg.className = 'user-message';
    userMsg.textContent = document.getElementById('user-input').value;
    
    // 预创建AI响应区域
    const aiResponseArea = document.createElement('div');
    aiResponseArea.className = 'ai-response';
    
    // 添加到消息流
    document.getElementById('chat-stream').appendChild(messageGroup);
    messageGroup.appendChild(userMsg);
    
    // 创建间隔区域
    const spacer = document.createElement('div');
    spacer.className = 'message-spacer';
    messageGroup.appendChild(spacer);
    
    // 设置当前响应容器
    currentResponseContainer = aiResponseArea;
    
    // 发送消息后立即添加AI响应区域
    messageGroup.appendChild(aiResponseArea);
    
    // 实际发送消息逻辑
    const message = document.getElementById('user-input').value;
    websocket.send(JSON.stringify({
        message: message
    }));
    
    // 清空输入框
    document.getElementById('user-input').value = '';
}
// WebSocket消息处理
let currentResponseContainer = null;

websocket.onmessage = function(e) {
    // 创建新消息组
    const messageGroup = document.createElement('div');
    messageGroup.className = 'message-group';
    
    // 创建AI消息容器
    const aiMessage = document.createElement('div');
    aiMessage.className = 'ai-message';
    
    // 创建响应容器
    currentResponseContainer = document.createElement('div');
    currentResponseContainer.className = 'ai-response';
    
    // 添加到消息流
    document.getElementById('chat-stream').appendChild(messageGroup);
    messageGroup.appendChild(aiMessage);
    aiMessage.appendChild(currentResponseContainer);
    
    // 追加流式内容
    currentResponseContainer.innerHTML += e.data;
    
    // 添加间隔
    const spacer = document.createElement('div');
    spacer.className = 'message-spacer';
    messageGroup.appendChild(spacer);
}

// 当用户发送新消息时
function sendMessage() {
    const userInput = document.getElementById('user-input');
    const chatStream = document.getElementById('chat-stream');
    
    // 创建消息组容器
    const messageGroup = document.createElement('div');
    messageGroup.className = 'message-group';
    
    // 用户消息区块
    const userMsg = document.createElement('div');
    userMsg.className = 'user-message';
    userMsg.textContent = userInput.value;
    
    // 创建专属的AI响应容器
    const aiResponseContainer = document.createElement('div');
    aiResponseContainer.className = 'ai-response';
    aiResponseContainer.id = `response-${Date.now()}`;
    
    // 消息间隔
    const spacer = document.createElement('div');
    spacer.className = 'message-spacer';
    
    // 组装消息组
    messageGroup.appendChild(userMsg);
    messageGroup.appendChild(spacer);
    messageGroup.appendChild(aiResponseContainer);
    
    // 添加到消息流顶部
    chatStream.insertBefore(messageGroup, chatStream.firstChild);
    
    // 设置当前响应容器
    currentResponseContainer = aiResponseContainer;
    
    // 发送WebSocket消息
    websocket.send(JSON.stringify({
        message: userInput.value,
        responseContainerId: aiResponseContainer.id
    }));
    
    // 清空输入框
    userInput.value = '';
}
