// Get quiz data from localStorage
const correctAnswers = localStorage.getItem('correctAnswers');
const wrongAnswers = localStorage.getItem('wrongAnswers');
const unanswered = localStorage.getItem('unanswered');

const questions = [
    // Nhóm 1: Lựa chọn đúng/sai
    {
        group: "Nhóm 1",
        type: "Lựa chọn đúng/sai",
        question: "Hà Nội là thủ đô của Việt Nam.",
        answer: true
    },
    {
        group: "Nhóm 1",
        type: "Lựa chọn đúng/sai",
        question: "Sông Mekong chảy qua lãnh thổ của Việt Nam.",
        answer: false
    },
    {
        group: "Nhóm 1",
        type: "Lựa chọn đúng/sai",
        question: "Mount Everest là ngọn núi cao nhất thế giới.",
        answer: true
    },
    {
        group: "Nhóm 1",
        type: "Lựa chọn đúng/sai",
        question: "Thái Bình Dương là biển lớn nhất trên Trái Đất.",
        answer: true
    },
    {
        group: "Nhóm 1",
        type: "Lựa chọn đúng/sai",
        question: "Địa cầu có 8 lục địa.",
        answer: false
    },
    {
        group: "Nhóm 1",
        type: "Lựa chọn đúng/sai",
        question: "Nước Nga có diện tích lớn nhất thế giới.",
        answer: true
    },
    {
        group: "Nhóm 1",
        type: "Lựa chọn đúng/sai",
        question: "Hồ Chí Minh là tên của một thành phố ở Việt Nam.",
        answer: true
    },
    {
        group: "Nhóm 1",
        type: "Lựa chọn đúng/sai",
        question: "Amazon là tên của một sông ở Châu Phi.",
        answer: false
    },
    {
        group: "Nhóm 1",
        type: "Lựa chọn đúng/sai",
        question: "Núi Kilimanjaro nằm ở Tanzania.",
        answer: true
    },
    {
        group: "Nhóm 1",
        type: "Lựa chọn đúng/sai",
        question: " Thái Lan có biên giới với Campuchia.",
        answer: true
    },
    {
        group: "Nhóm 2",
        type: "Chọn 1 trong 4 đáp án",
        question: " Ai là người đầu tiên đặt chân lên mặt trăng?",
        options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"],
        answer: 0 
    },
    {
        group: "Nhóm 2",
        type: "Chọn 1 trong 4 đáp án",
        question: " Ai là tác giả của cuốn tiểu thuyết 'Bố già'?",
        options: ["Mario Puzo", "John Grisham", "Stephen King", "Dan Brown"],
        answer: 0
    },
    {
        group: "Nhóm 2",
        type: "Chọn 1 trong 4 đáp án",
        question: " Quốc gia nào được biết đến với tên gọi 'Đất nước của những nụ cười'?",
        options: ["Nga", "Nhật Bản", "Thái Lan", "Hàn Quốc"],
        answer: 2
    },
    {
        group: "Nhóm 2",
        type: "Chọn 1 trong 4 đáp án",
        question: " Ai là người sáng lập ra Apple Inc.?",
        options: ["Steve Jobs", "Bill Gates", "Jeff Bezos", "Mark Zuckerberg"],
        answer: 0
    },
    {
        group: "Nhóm 2",
        type: "Chọn 1 trong 4 đáp án",
        question: " Tác giả nào được coi là 'Người cha của truyện tranh'?",
        options: ["Osamu Tezuka", "Stan Lee", "Hergé", "Will Eisner"],
        answer: 0
    },
    {
        group: "Nhóm 2",
        type: "Chọn 1 trong 4 đáp án",
        question: " Thành phố nào được biết đến với tên gọi 'Thủ đô của thế giới'?",
        options: ["New York", "Tokyo", "London", "Paris"],
        answer: 0
    },
    {
        group: "Nhóm 2",
        type: "Chọn 1 trong 4 đáp án",
        question: " Ai là người phát minh ra đèn đốt nến?",
        options: ["Thomas Edison", "Galileo Galilei", "Albert Einstein", "Nikola Tesla"],
        answer: 0
    },
    {
        group: "Nhóm 2",
        type: "Chọn 1 trong 4 đáp án",
        question: " Ngày nào được coi là Ngày Quốc tế Phụ nữ?",
        options: ["8/3", "20/10", "1/5", "12/6"],
        answer: 0
    },
    {
        group: "Nhóm 2",
        type: "Chọn 1 trong 4 đáp án",
        question: " Ai là người đầu tiên vẽ bức tranh 'Mona Lisa'?",
        options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"],
        answer: 0
    },
    {
        group: "Nhóm 2",
        type: "Chọn 1 trong 4 đáp án",
        question: " Tác phẩm 'Bài ca không quên' của tác giả nào?",
        options: ["Phạm Duy", "Trịnh Công Sơn", "Lê Cát Trọng Lý", "Trịnh Tuấn Vỹ"],
        answer: 0
    },
    {
        group: "Nhóm 3",
        type: "Chọn nhiều đáp án",
        question: " Các màu cơ bản trong quang phổ là gì?",
        options: ["Đỏ", "Xanh dương", "Vàng", "Xanh lá", "Tím"],
        answer: [0, 1, 3]
    },
    {
        group: "Nhóm 3",
        type: "Chọn nhiều đáp án",
        question: " Các hành động sau đây được coi là biểu hiện của sự cảm thông. Chọn các hành động cảm thông:",
        options: ["Hiểu và chia sẻ cảm xúc với người khác", "Giúp đỡ người khác khi họ gặp khó khăn", "Thúc đẩy người khác vào tình huống khó khăn", "Khuyến khích người khác thực hiện hành động thiện lành"],
        answer: [0, 1] 
    },
    {
        group: "Nhóm 3",
        type: "Chọn nhiều đáp án",
        question: " Các nước sau đây nằm ở châu lục Châu Á. Chọn các nước nằm ở châu lục Châu Á:",
        options: ["Brazil", "Nhật Bản", "Pháp", "Ấn Độ", "Nigeria"],
        answer: [1, 3] 
    },
    {
        group: "Nhóm 3",
        type: "Chọn nhiều đáp án",
        question: " Những mô hình kinh doanh sau đây được phát triển trên mạng internet. Chọn những mô hình kinh doanh trên mạng internet:",
        options: ["Bán lẻ trực tuyến", "Dịch vụ tư vấn tài chính online", "Sản xuất mỹ phẩm tự nhiên", "Kinh doanh nhà hàng"],
        answer: [0, 1] 
    },
    {
        group: "Nhóm 3",
        type: "Chọn nhiều đáp án",
        question: " Các loại cây sau đây là cây trồng lúa. Chọn các loại cây trồng lúa:",
        options: ["Đậu", "Rau muống", "Ngô", "Mía", "Lúa"],
        answer: [3, 4] 
    },
    {
        group: "Nhóm 3",
        type: "Chọn nhiều đáp án",
        question: " Các loại động vật sau đây là động vật có vú. Chọn các loại động vật có vú:",
        options: ["Cá", "Chim", "Khỉ", "Cá heo", "Chó"],
        answer: [2, 3, 4] 
    },
    {
        group: "Nhóm 3",
        type: "Chọn nhiều đáp án",
        question: " Các hành động sau đây có thể giúp bảo vệ môi trường. Chọn các hành động bảo vệ môi trường:",
        options: ["Tái chế", "Littering", "Tiết kiệm nước", "Xây dựng thêm nhà máy sản xuất chất thải"],
        answer: [0, 2] 
    },
    {
        group: "Nhóm 3",
        type: "Chọn nhiều đáp án",
        question: " Các quốc gia sau đây nằm ở châu lục châu Âu. Chọn các quốc gia nằm ở châu lục châu Âu:",
        options: ["Pháp", "Mông Cổ", "Thụy Điển", "Tây Ban Nha", "Nga"],
        answer: [0, 2, 3] 
    },
    {
        group: "Nhóm 3",
        type: "Chọn nhiều đáp án",
        question: " Các loại thực phẩm sau đây là thực phẩm giàu chất dinh dưỡng. Chọn các loại thực phẩm giàu chất dinh dưỡng:",
        options: ["Kẹo", "Rau cải", "Thịt", "Hamburger", "Hoa quả"],
        answer: [1, 2, 4] 
    },
    {
        group: "Nhóm 3",
        type: "Chọn nhiều đáp án",
        question: " Các quốc gia sau đây là thành viên của Liên Hiệp Quốc (United Nations). Chọn các quốc gia là thành viên của Liên Hiệp Quốc:",
        options: ["Thụy Sĩ", "Canada", "Mexico", "Brazil", "Nga"],
        answer: [1, 2, 4] 
    },
    {
        group: "Nhóm 4",
        type: "Trả lời tự luận",
        question: " Viết một đoạn văn ngắn về ảnh hưởng của công nghệ thông tin đối với xã hội hiện đại."
    },
    {
        group: "Nhóm 4",
        type: "Trả lời tự luận",
        question: " Phân tích vai trò của giáo dục trong xã hội hiện nay."
    },
    {
        group: "Nhóm 4",
        type: "Trả lời tự luận",
        question: " Đánh giá ảnh hưởng của biến đổi khí hậu đối với môi trường sống của con người."
    },
    {
        group: "Nhóm 4",
        type: "Trả lời tự luận",
        question: " Trình bày quan điểm của bạn về vai trò của phụ nữ trong xã hội hiện đại."
    },
    {
        group: "Nhóm 4",
        type: "Trả lời tự luận",
        question: " Nhận định về tầm quan trọng của việc duy trì và phát triển văn hóa và truyền thống trong một quốc gia."
    },
    {
        group: "Nhóm 4",
        type: "Trả lời tự luận",
        question: " Phân tích các biện pháp để giảm thiểu sự ô nhiễm môi trường trong đô thị."
    },
    {
        group: "Nhóm 4",
        type: "Trả lời tự luận",
        question: " Đánh giá tác động của cuộc cách mạng công nghiệp 4.0 đối với nền kinh tế toàn cầu."
    },
    {
        group: "Nhóm 4",
        type: "Trả lời tự luận",
        question: " Trình bày quan điểm của bạn về vai trò của truyền thông đại chúng trong định hình ý thức công dân."
    },
    {
        group: "Nhóm 4",
        type: "Trả lời tự luận",
        question: " Phân tích các biện pháp để xử lý vấn đề ô nhiễm không khí trong các thành phố lớn."
    },
    {
        group: "Nhóm 4",
        type: "Trả lời tự luận",
        question: " Trình bày quan điểm của bạn về tầm quan trọng của nghệ thuật và văn hóa trong cuộc sống con người."
    }    
    // Add more questions for Nhóm 4...
];

function displayResult() {
    const resultContainer = document.getElementById('result-container');

    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        let answerStatus = '';
        if (question.type === "Lựa chọn đúng/sai" || question.type === "Chọn 1 trong 4 đáp án") {
            answerStatus = (question.answer === index) ? 'correct-answer' : 'wrong-answer';
        }

        questionDiv.innerHTML = `
            <p><strong>Câu ${index + 1}:</strong> ${question.question}</p>
            <p class="${answerStatus}">Câu trả lời của bạn: ${getAnswer(index)}</p>
            <p class="correct-answer">Đáp án đúng: ${getCorrectAnswer(question)}</p>
        `;
        resultContainer.appendChild(questionDiv);
    });
}

function getAnswer(index) {
    const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
    return selectedAnswer ? selectedAnswer.nextSibling.textContent.trim() : 'Chưa trả lời';
}

function getCorrectAnswer(question) {
    if (question.type === "Lựa chọn đúng/sai") {
        return question.answer ? 'Đúng' : 'Sai';
    } else if (question.type === "Chọn 1 trong 4 đáp án") {
        return question.options[question.answer];
    }
}

displayResult();
