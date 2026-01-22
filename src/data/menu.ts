import banoffeeImg from '../assets/banoffee.png'

export interface MenuItem {
    id: number;
    name: string;
    // price: string;
    description: string;
    img: string;
    category: string;
}

export const menuData: MenuItem[] = [
    {
        id: 1,
        name: "Signature Banoffee",
        // price: "888",
        description: "บานอฟฟี่เลเยอร์หนานุ่ม กล้วยหอมคัดเกรดราดซอสคาราเมลโฮมเมด และครีมสดละมุนลิ้น",
        img: banoffeeImg,
        category: "Signature"
    },
    {
        id: 2,
        name: "Classic English Scone",
        // price: "888",
        description: "สโคนสูตรดั้งเดิม อบสดใหม่ทุกเช้า ผิวนอกกรอบในนุ่ม เสิร์ฟพร้อมแยมเบอร์รี่และคล็อตเต็ดครีม",
        img: "https://images.unsplash.com/photo-1589114471223-dec0d8d572c6?w=600",
        category: "Bakery"
    },
    {
        id: 3,
        name: "Burnt Cheesecake",
        // price: "888",
        description: "ชีสเค้กหน้าไหม้สไตล์บาสก์ เนื้อเนียนนุ่ม หอมกลิ่นไหม้นิดๆ รสชาติชีสเข้มข้นจากสเปน",
        img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600",
        category: "Bakery"
    },
    {
        id: 4,
        name: "Yippy Choc",
        // price: "888",
        description: "เมนูช็อกโกแลตซิกเนเจอร์ เข้มข้นระดับพรีเมียม ผสานความกรุบกรอบที่ทำให้คุณรู้สึก 'Yippy' ทุกคำ",
        img: "https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=600",
        category: "Bakery"
    },
];