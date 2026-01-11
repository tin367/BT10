animals = [
    { ten: "Trâu", anh: "img/buffalo/buffalo_8.jfif", thuvien: ["img/buffalo/buffalo_1.jfif", "img/buffalo/buffalo_2.jfif", "img/buffalo/buffalo_3.jfif",
        "img/buffalo/buffalo_4.jfif", "img/buffalo/buffalo_5.jfif", "img/buffalo/buffalo_6.jfif", "img/buffalo/buffalo_7.jfif"
    ] },
    { ten: "Bò", anh: "img/cow/cow_8.jfif",  thuvien: ["img/cow/cow_1.jfif", "img/cow/cow_2.jfif", "img/cow/cow_3.jfif",
        "img/cow/cow_4.jfif", "img/cow/cow_5.jfif", "img/cow/cow_6.jfif", "img/cow/cow_7.jfif"
    ] },
    { ten: "Cá", anh: "img/fish/fish_8.jfif",  thuvien: ["img/fish/fish_1.jfif", "img/fish/fish_2.jfif", "img/fish/fish_3.jfif",
        "img/fish/fish_4.jfif", "img/fish/fish_5.jfif", "img/fish/fish_6.jfif", "img/fish/fish_7.jfif"
    ] },
    { ten: "Rắn", anh: "img/snake/snake_8.jfif", thuvien: ["img/snake/snake_1.jfif", "img/snake/snake_2.jfif", "img/snake/snake_3.jfif",
        "img/snake/snake_4.jfif", "img/snake/snake_5.jfif", "img/snake/snake_6.jfif", "img/snake/snake_7.jfif"
    ] },
    { ten: "Hổ", anh: "img/tiger/tiger_7.jfif", thuvien: ["img/tiger/tiger_1.jfif", "img/tiger/tiger_2.jfif", "img/tiger/tiger_3.jfif",
        "img/tiger/tiger_4.jfif", "img/tiger/tiger_5.jfif", "img/tiger/tiger_6.jfif", "img/tiger/tiger_8.jfif"
    ] }
];

const danhSachDiv = document.getElementById('danhsach');
const thuVienDiv = document.getElementById('thuvienanh');

function hienThiDanhSach() {
    animals.forEach(animal => {
        const card = document.createElement('div');
        card.className = 'animal-card';
        card.innerHTML = `
            <img src="${animal.anh}" alt="${animal.ten}">
            <h3>${animal.ten}</h3>
        `;
        
        card.addEventListener("click", () =>{
            hienThiThuVien(animal.thuvien)
        });
        
        danhSachDiv.appendChild(card);
    });
}
function hienThiThuVien(danhSachAnh) {
    thuVienDiv.innerHTML = "";
    
    danhSachAnh.forEach(duongDan => {
        const img = document.createElement('img');
        img.src = duongDan;
        img.className = 'gallery-item';
        thuVienDiv.appendChild(img);
    });
}

hienThiDanhSach();
// Nguyễn Trọng Tín 24NT01051