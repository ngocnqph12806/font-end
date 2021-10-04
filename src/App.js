import RouterDOM from "./Router";
import React, {useEffect, useState} from 'react';
import ProductAPI from "./service/ProductAPI";
import {getLocalStorage, getSessionStorage, saveLocalStorage, saveSessionStorage} from "./service/UtilsAPI";

const App = () => {

    const [filterPrice, setFilterPrice] = useState({
        "min": 1000,
        "max": 2000
    });

    const [filterColor, setFilterColor] = useState(["Vàng", "Đỏ"]);

    const [ListVouhcer, setListVouhcer] = useState([
        {
            id: 1,
            code: "12354",
            priceSale: 1000
        },
        {
            id: 2,
            code: "123543",
            priceSale: 2000
        }
    ]);

    const [codeVoucher, setCodeVoucher] = useState({});

    const fnSetCoceVoucher = (code) => {
        // setCodeVoucher(code)
        if (code !== null && code !== undefined) {
            if (ListVouhcer !== null && ListVouhcer !== undefined && ListVouhcer.length > 0) {
                for (let i = 0; i < ListVouhcer.length; i++) {
                    if (ListVouhcer[i].code === code) {
                        let total = cart.reduce((a, v) => a = a + v.product.price * v.quantity, 0)
                        setTotalPriceCart(Number(total) - Number(ListVouhcer[i].priceSale))
                        // setPriceVoucher(ListVouhcer[i].price)
                        setCodeVoucher(ListVouhcer[i])
                        return true;
                    }
                }
            }
        }
        setCodeVoucher({id: 3, code: "", priceSale: 0})
        let total = cart.reduce((a, v) => a = a + v.product.price * v.quantity, 0)
        setTotalPriceCart(Number(total))
        return false;
    }

    const [cart, setCart] = useState([]);

    const [totalPriceCart, setTotalPriceCart] = useState(0);

    useEffect(() => {
        if (cart !== null && cart !== undefined && cart.length >= 0) {
            // setTotalPriceCart(cart.reduce((a, v) => a = a + v.product.price * v.quantity, 0))
            fnSetCoceVoucher(codeVoucher)
        }
    }, [cart]);

    const fnAddCart = (obj) => {
        saveLocalStorage("cart", obj);
        setCart(obj);
        // setTotalPriceCart(cart.reduce((a, v) => a = a + v.product.price * v.quantity, 0))
        fnSetCoceVoucher(codeVoucher)
    }

    const [ListProducts, setListProducts] = useState([
        {
            "id": "e6d369e5-fc0f-4a50-9e8e-f7f232e63283",
            "name": "242432",
            "idBrand": "a22f4b5f-dc97-47bd-bdc1-efba3e86d532",
            "nameBrand": "Thương hiệu 44",
            "idCategory": "df194a76-d251-421d-95f1-16a336f21e89",
            "nameCategory": "Loại số 33",
            "idPathCategory": 7994164137361637543,
            "pathCategory": "loai-so-33.html",
            "price": 45235532,
            "priceSale": 4324,
            "quantity": 43245,
            "color": "4235",
            "categoryDetails": "3244",
            "location": "25423523",
            "path": "242432",
            "idPath": 690547413177802687,
            "pathUserManual": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/[27-09-2021 22:11:45 GMT+0700 (Indochina Time)] == 078.BAI 9.pdf",
            "description": "5234423",
            "status": true,
            "dateCreated": "2021-09-27T15:11:52.000+00:00",
            "pointReview": 6.0,
            "details": null,
            "images": [],
            "reviews": []
        },
        {
            "id": "c732fbe4-40ee-4b94-a183-595046937eaf",
            "name": "53452345",
            "idBrand": "147378af-2e19-4ab9-a8af-f8de22648d6f",
            "nameBrand": "Thương hiệu số 2",
            "idCategory": "0fd62e51-0b3a-4bdb-931f-6200a959a867",
            "nameCategory": "Loại số 121",
            "idPathCategory": 3423,
            "pathCategory": "loai-so-121.html",
            "price": 53245234,
            "priceSale": 54235,
            "quantity": 4325,
            "color": "4235",
            "categoryDetails": "4235",
            "location": "43255234",
            "path": "5345234524354325",
            "idPath": 16,
            "pathUserManual": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/[27-09-2021 22:47:55 GMT+0700 (Indochina Time)] == 613.BAI 6.pdf",
            "description": "<b>23452435</b>",
            "status": true,
            "dateCreated": "2021-09-27T15:48:23.000+00:00",
            "pointReview": 78.0,
            "details": null,
            "images": [
                {
                    "id": "fd1c7d2e-aefd-411d-91cd-c92fde05bf1d",
                    "path": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/%5B29-09-2021%2017%3A02%3A40%20GMT%2B0700%20(Indochina%20Time)%5D%20%3D%3D%20565.Khoi-Su-Doanh-Nghiep.drawio%20(4).png?token=AQOK3ZAAZ372E7SVZQTS6M3BKWCCA",
                    "idProduct": "c732fbe4-40ee-4b94-a183-595046937eaf",
                    "nameProduct": null
                },
                {
                    "id": "e4725e7c-ed9c-48be-bd39-e327a06bd7df",
                    "path": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/[27-09-2021 22:48:02 GMT+0700 (Indochina Time)] == 342.Virtual Background - Webinar.jpg",
                    "idProduct": "c732fbe4-40ee-4b94-a183-595046937eaf",
                    "nameProduct": null
                },
                {
                    "id": "45f837b2-37d4-4756-903b-10fcc528cd70",
                    "path": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/[27-09-2021 22:48:04 GMT+0700 (Indochina Time)] == 021.z2794947813894_09d9266620f8bd7bc7dd18702d9e9b8d.jpg",
                    "idProduct": "c732fbe4-40ee-4b94-a183-595046937eaf",
                    "nameProduct": null
                }
            ],
            "reviews": []
        }
    ]);

    const [ListBrands, setListBrands] = useState([
        {
            "id": "idbrand-1",
            "name": "Thương hiệu số 23",
            "phoneNumber": "0123456789",
            "email": "brand@g.co.vn",
            "address": "số 132432rfwdf",
            "description": "Thhuowng hiệu 1",
            "status": true,
            "dateCreated": "2021-09-07T03:34:12.000+00:00",
            "countProducts": 2,
            "collectionBrands": [
                {
                    "id": "details-1-2-3a",
                    "idBrand": "idbrand-1",
                    "nameBrand": "Thương hiệu số 23",
                    "idCollection": "collection-1",
                    "nameCollection": "Tên danh mục 3"
                }
            ]
        },
        {
            "id": "a22f4b5f-dc97-47bd-bdc1-efba3e86d532",
            "name": "Thương hiệu 44",
            "phoneNumber": "034623889991",
            "email": "ngOC13@gmail.com",
            "address": "Kim Lũ Hà Nội",
            "description": "",
            "status": true,
            "dateCreated": "2021-09-20T13:15:49.000+00:00",
            "countProducts": 12,
            "collectionBrands": []
        },
        {
            "id": "147378af-2e19-4ab9-a8af-f8de22648d6f",
            "name": "Thương hiệu số 2",
            "phoneNumber": "0346238899",
            "email": "brand1@gmail.com",
            "address": "fasgrewsgesgtester",
            "description": "gfdsgse",
            "status": true,
            "dateCreated": "2021-09-13T02:01:40.000+00:00",
            "countProducts": 8,
            "collectionBrands": []
        }
    ]);

    const [ListBanners, setListBanners] = useState([
        {
            "id": 1,
            "title": "Banner 1",
            "pathImage": "Path banner 1",
            "link": "Link banner1",
            "description": "Mô tả banner 1",
            "status": true,
            "dateCreated": "2021-09-13T02:01:40.000+00"
        },
        {
            "id": 2,
            "title": "Banner 2",
            "pathImage": "Path banner 2",
            "link": "Link banner 2",
            "description": "Mô tả banner 2",
            "status": true,
            "dateCreated": "2021-09-13T02:01:40.000+00"
        },
        {
            "id": 3,
            "title": "Banner 3",
            "pathImage": "Path banner 3",
            "link": "Link banner 3",
            "description": "Mô tả banner 3",
            "status": false,
            "dateCreated": "2021-09-13T02:01:40.000+00"
        }
    ]);

    const [ListCategories, setListCategories] = useState([
        {
            "id": "idcategory-1",
            "name": "Loại số 233",
            "banner": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/32132.png",
            "path": "loai-so-233",
            "idPath": 341214232,
            "description": "Loại 2",
            "status": true,
            "dateCreated": "2021-09-07T03:34:42.000+00:00",
            "countProducts": 6,
            "products": [
                {
                    "id": "963b9c49-444f-41d9-8311-256ff49665d3",
                    "name": "3124321",
                    "idBrand": "147378af-2e19-4ab9-a8af-f8de22648d6f",
                    "nameBrand": "Thương hiệu số 2",
                    "idCategory": "idcategory-1",
                    "nameCategory": "Loại số 233",
                    "idPathCategory": 1,
                    "pathCategory": "loai-so-233",
                    "price": 432144,
                    "priceSale": 231,
                    "quantity": 14423,
                    "color": "41234",
                    "categoryDetails": "4124",
                    "location": "42134",
                    "path": "31243241341",
                    "idPath": -1310024834846288305,
                    "pathUserManual": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/[27-09-2021 21:46:24 GMT+0700 (Indochina Time)] == 733.BAI 9.pdf",
                    "description": "4124",
                    "status": true,
                    "dateCreated": "2021-09-27T14:46:31.000+00:00",
                    "pointReview": 0.0,
                    "details": null,
                    "images": [
                        {
                            "id": "257ec888-106e-430c-b788-c12bfb7f678e",
                            "path": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/[27-09-2021 21:46:27 GMT+0700 (Indochina Time)] == 896.z2794947813894_09d9266620f8bd7bc7dd18702d9e9b8d.jpg",
                            "idProduct": "963b9c49-444f-41d9-8311-256ff49665d3",
                            "nameProduct": null
                        }
                    ],
                    "reviews": []
                },
                {
                    "id": "18456ce0-fc53-4e4f-ac38-eda3c3ab6807",
                    "name": "r34qfeawrfea",
                    "idBrand": "147378af-2e19-4ab9-a8af-f8de22648d6f",
                    "nameBrand": "Thương hiệu số 2",
                    "idCategory": "idcategory-1",
                    "nameCategory": "Loại số 233",
                    "idPathCategory": 1,
                    "pathCategory": "loai-so-233",
                    "price": 4123453214,
                    "priceSale": 4124123,
                    "quantity": 4143211,
                    "color": "rewafeaw",
                    "categoryDetails": "fgeawrewag",
                    "location": "ằewa",
                    "path": "r34qfeawrfea",
                    "idPath": 977890647173393565,
                    "pathUserManual": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/[27-09-2021 21:40:50 GMT+0700 (Indochina Time)] == 450.BAI 6.pdf",
                    "description": "fawerewgg",
                    "status": true,
                    "dateCreated": "2021-09-27T14:41:02.000+00:00",
                    "pointReview": 0.0,
                    "details": null,
                    "images": [],
                    "reviews": []
                },
                {
                    "id": "977e09f2-5371-44c6-b3d7-cba3ba89f31d",
                    "name": "răefewa",
                    "idBrand": "147378af-2e19-4ab9-a8af-f8de22648d6f",
                    "nameBrand": "Thương hiệu số 2",
                    "idCategory": "idcategory-1",
                    "nameCategory": "Loại số 233",
                    "idPathCategory": 1,
                    "pathCategory": "loai-so-233",
                    "price": 3124234,
                    "priceSale": 4234,
                    "quantity": 32432,
                    "color": "4324",
                    "categoryDetails": "32432",
                    "location": "432",
                    "path": "raefewarueaf",
                    "idPath": 1340103499321350810,
                    "pathUserManual": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/[27-09-2021 22:17:38 GMT+0700 (Indochina Time)] == 470.BAI 8.pdf",
                    "description": "4324",
                    "status": true,
                    "dateCreated": "2021-09-27T15:19:54.000+00:00",
                    "pointReview": 0.0,
                    "details": null,
                    "images": [
                        {
                            "id": "d209ef95-5d05-46eb-9d62-6e5fd7605ba2",
                            "path": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/[27-09-2021 22:17:42 GMT+0700 (Indochina Time)] == 462.z2794947813894_09d9266620f8bd7bc7dd18702d9e9b8d.jpg",
                            "idProduct": "977e09f2-5371-44c6-b3d7-cba3ba89f31d",
                            "nameProduct": null
                        },
                        {
                            "id": "17a8835e-61f6-40b9-b251-7baa2cc265b9",
                            "path": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/[27-09-2021 22:18:01 GMT+0700 (Indochina Time)] == 010.z2794947813894_09d9266620f8bd7bc7dd18702d9e9b8d.jpg",
                            "idProduct": "977e09f2-5371-44c6-b3d7-cba3ba89f31d",
                            "nameProduct": null
                        },
                        {
                            "id": "89d01edb-91d9-4af2-a831-232c3890704a",
                            "path": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/[27-09-2021 22:19:00 GMT+0700 (Indochina Time)] == 650.Virtual Background - Webinar.jpg",
                            "idProduct": "977e09f2-5371-44c6-b3d7-cba3ba89f31d",
                            "nameProduct": null
                        }
                    ],
                    "reviews": []
                },
                {
                    "id": "b57f52e4-4b8d-4ee3-9e37-e0bb21dd0576",
                    "name": "răefewa32",
                    "idBrand": "147378af-2e19-4ab9-a8af-f8de22648d6f",
                    "nameBrand": "Thương hiệu số 2",
                    "idCategory": "idcategory-1",
                    "nameCategory": "Loại số 233",
                    "idPathCategory": 1,
                    "pathCategory": "loai-so-233",
                    "price": 3124234,
                    "priceSale": 4234,
                    "quantity": 32432,
                    "color": "4324",
                    "categoryDetails": "32432",
                    "location": "432",
                    "path": "raefewa32",
                    "idPath": 1403584927105807381,
                    "pathUserManual": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/[27-09-2021 22:17:38 GMT+0700 (Indochina Time)] == 470.BAI 8.pdf",
                    "description": "4324",
                    "status": true,
                    "dateCreated": "2021-09-27T15:20:58.000+00:00",
                    "pointReview": 0.0,
                    "details": null,
                    "images": [],
                    "reviews": []
                },
                {
                    "id": "446af8e0-03e8-4c98-a0c3-f783dac798b7",
                    "name": "312543124321",
                    "idBrand": "a22f4b5f-dc97-47bd-bdc1-efba3e86d532",
                    "nameBrand": "Thương hiệu 44",
                    "idCategory": "idcategory-1",
                    "nameCategory": "Loại số 233",
                    "idPathCategory": 1,
                    "pathCategory": "loai-so-233",
                    "price": 43124312,
                    "priceSale": 4321,
                    "quantity": 41234,
                    "color": "431243",
                    "categoryDetails": "3124",
                    "location": "214321",
                    "path": "3125431243244121",
                    "idPath": 410065408,
                    "pathUserManual": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/[27-09-2021 22:52:38 GMT+0700 (Indochina Time)] == 487.BAI 8.pdf",
                    "description": "43214",
                    "status": true,
                    "dateCreated": "2021-09-27T15:52:54.000+00:00",
                    "pointReview": 0.0,
                    "details": null,
                    "images": [
                        {
                            "id": "95288264-6f78-491b-a01f-08fcdeac43b4",
                            "path": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/[27-09-2021 22:52:41 GMT+0700 (Indochina Time)] == 581.Khoi-Su-Doanh-Nghiep.drawio (4).png",
                            "idProduct": "446af8e0-03e8-4c98-a0c3-f783dac798b7",
                            "nameProduct": null
                        },
                        {
                            "id": "0d4936a9-9d81-49e0-a249-c6689bb58290",
                            "path": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/[27-09-2021 22:52:44 GMT+0700 (Indochina Time)] == 490.screenshot_1632402998.png",
                            "idProduct": "446af8e0-03e8-4c98-a0c3-f783dac798b7",
                            "nameProduct": null
                        },
                        {
                            "id": "f024940b-9a9c-4222-b5c3-00844d0cd900",
                            "path": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/[27-09-2021 22:52:49 GMT+0700 (Indochina Time)] == 735.d4771474d074a0ca51cb4371d34299dd.jpg",
                            "idProduct": "446af8e0-03e8-4c98-a0c3-f783dac798b7",
                            "nameProduct": null
                        }
                    ],
                    "reviews": []
                },
                {
                    "id": "115aafb2-d454-49c3-a015-457f096a04b1",
                    "name": "43124321",
                    "idBrand": "idbrand-1",
                    "nameBrand": "Thương hiệu số 23",
                    "idCategory": "idcategory-1",
                    "nameCategory": "Loại số 233",
                    "idPathCategory": 1,
                    "pathCategory": "loai-so-233",
                    "price": 41234123,
                    "priceSale": 43214321,
                    "quantity": 4321,
                    "color": "4124",
                    "categoryDetails": "43124",
                    "location": "41234",
                    "path": "4312432143214",
                    "idPath": 2610487995047778180,
                    "pathUserManual": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/[27-09-2021 21:46:52 GMT+0700 (Indochina Time)] == 996.BAI 8.pdf",
                    "description": "124123",
                    "status": true,
                    "dateCreated": "2021-09-27T14:47:06.000+00:00",
                    "pointReview": 0.0,
                    "details": null,
                    "images": [],
                    "reviews": []
                }
            ],
            "collectionCategories": [
                {
                    "id": "collection-category-1-2-3a",
                    "idCategory": "idcategory-1",
                    "nameCategory": "Loại số 233",
                    "idCollection": "collection-1",
                    "nameCollection": "Tên danh mục 3"
                }
            ]
        },
        {
            "id": "df194a76-d251-421d-95f1-16a336f21e89",
            "name": "Loại số 33",
            "banner": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/[13-09-2021 10:14:50 GMT+0700 (Giờ Đông Dương)] == 403.240717240_1149810682094963_8249301469011424542_n.jpg",
            "path": "loai-so-33.html",
            "idPath": 3412352312,
            "description": "",
            "status": true,
            "dateCreated": "2021-09-13T03:17:22.000+00:00",
            "countProducts": 9,
            "products": [
                {
                    "id": "1ad49903-37e9-435e-bfb5-cd4ad3a4a124",
                    "name": "432143124312",
                    "idBrand": "147378af-2e19-4ab9-a8af-f8de22648d6f",
                    "nameBrand": "Thương hiệu số 2",
                    "idCategory": "df194a76-d251-421d-95f1-16a336f21e89",
                    "nameCategory": "Loại số 33",
                    "idPathCategory": 7994164137361637543,
                    "pathCategory": "loai-so-33.html",
                    "price": 432143214,
                    "priceSale": 41234,
                    "quantity": 12343214,
                    "color": "43124",
                    "categoryDetails": "413214",
                    "location": "2314",
                    "path": "43214312443312",
                    "idPath": 4,
                    "pathUserManual": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/[27-09-2021 22:33:23 GMT+0700 (Indochina Time)] == 543.BAI 9.pdf",
                    "description": "123421",
                    "status": true,
                    "dateCreated": "2021-09-27T15:33:35.000+00:00",
                    "pointReview": 0.0,
                    "details": null,
                    "images": [
                        {
                            "id": "af3d35e7-f847-401c-9794-1c2f82a5f9d9",
                            "path": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/[27-09-2021 22:33:26 GMT+0700 (Indochina Time)] == 258.z2794947813894_09d9266620f8bd7bc7dd18702d9e9b8d.jpg",
                            "idProduct": "1ad49903-37e9-435e-bfb5-cd4ad3a4a124",
                            "nameProduct": null
                        },
                        {
                            "id": "dc310455-4905-4f53-9e6b-efe0d9c2eb56",
                            "path": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/[27-09-2021 22:33:28 GMT+0700 (Indochina Time)] == 666.Khoi-Su-Doanh-Nghiep.drawio (4).png",
                            "idProduct": "1ad49903-37e9-435e-bfb5-cd4ad3a4a124",
                            "nameProduct": null
                        },
                        {
                            "id": "700f1ccc-d32e-44c1-82cc-e13258d30506",
                            "path": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/[27-09-2021 22:33:30 GMT+0700 (Indochina Time)] == 759.Virtual Background - Webinar.jpg",
                            "idProduct": "1ad49903-37e9-435e-bfb5-cd4ad3a4a124",
                            "nameProduct": null
                        }
                    ],
                    "reviews": []
                },
                {
                    "id": "5c83c9ac-06af-45ce-84b4-f94448e50152",
                    "name": "43214132",
                    "idBrand": "147378af-2e19-4ab9-a8af-f8de22648d6f",
                    "nameBrand": "Thương hiệu số 2",
                    "idCategory": "df194a76-d251-421d-95f1-16a336f21e89",
                    "nameCategory": "Loại số 33",
                    "idPathCategory": 7994164137361637543,
                    "pathCategory": "loai-so-33.html",
                    "price": 524354235,
                    "priceSale": 4325423,
                    "quantity": 52345,
                    "color": "4325",
                    "categoryDetails": "234534",
                    "location": "253",
                    "path": "43214132",
                    "idPath": 8,
                    "pathUserManual": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/[27-09-2021 22:36:19 GMT+0700 (Indochina Time)] == 858.BAI 8.pdf",
                    "description": "245432",
                    "status": true,
                    "dateCreated": "2021-09-27T15:36:28.000+00:00",
                    "pointReview": 0.0,
                    "details": null,
                    "images": [
                        {
                            "id": "31b6f2dd-e1cd-4373-8fc3-399c9e733ea8",
                            "path": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/[27-09-2021 22:36:22 GMT+0700 (Indochina Time)] == 783.z2794947813894_09d9266620f8bd7bc7dd18702d9e9b8d.jpg",
                            "idProduct": "5c83c9ac-06af-45ce-84b4-f94448e50152",
                            "nameProduct": null
                        },
                        {
                            "id": "7e599f3a-9bfd-4e2d-88c5-dcabf0a5d3fc",
                            "path": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/[27-09-2021 22:36:24 GMT+0700 (Indochina Time)] == 593.Virtual Background - Webinar.jpg",
                            "idProduct": "5c83c9ac-06af-45ce-84b4-f94448e50152",
                            "nameProduct": null
                        }
                    ],
                    "reviews": []
                },
                {
                    "id": "4a5222fa-8e8a-42b4-badc-9d8bd4b11382",
                    "name": "43124",
                    "idBrand": "147378af-2e19-4ab9-a8af-f8de22648d6f",
                    "nameBrand": "Thương hiệu số 2",
                    "idCategory": "df194a76-d251-421d-95f1-16a336f21e89",
                    "nameCategory": "Loại số 33",
                    "idPathCategory": 7994164137361637543,
                    "pathCategory": "loai-so-33.html",
                    "price": 43214,
                    "priceSale": 3214,
                    "quantity": 3214321,
                    "color": "4321",
                    "categoryDetails": "4123",
                    "location": "43214",
                    "path": "431243214321",
                    "idPath": 132141210,
                    "pathUserManual": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/[27-09-2021 22:30:07 GMT+0700 (Indochina Time)] == 391.BAI 8.pdf",
                    "description": "321432",
                    "status": true,
                    "dateCreated": "2021-09-27T15:30:18.000+00:00",
                    "pointReview": 0.0,
                    "details": null,
                    "images": [
                        {
                            "id": "6bd1e3cf-d896-4dd9-be3b-56e78473515b",
                            "path": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/[27-09-2021 22:30:10 GMT+0700 (Indochina Time)] == 277.z2794947813894_09d9266620f8bd7bc7dd18702d9e9b8d.jpg",
                            "idProduct": "4a5222fa-8e8a-42b4-badc-9d8bd4b11382",
                            "nameProduct": null
                        },
                        {
                            "id": "fdd837f6-4659-4053-b033-97918f7da768",
                            "path": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/[27-09-2021 22:30:12 GMT+0700 (Indochina Time)] == 182.Khoi-Su-Doanh-Nghiep.drawio (4).png",
                            "idProduct": "4a5222fa-8e8a-42b4-badc-9d8bd4b11382",
                            "nameProduct": null
                        },
                        {
                            "id": "e88d5d84-2821-4542-a30d-c2f16b962e7e",
                            "path": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/[27-09-2021 22:30:14 GMT+0700 (Indochina Time)] == 166.Virtual Background - Webinar.jpg",
                            "idProduct": "4a5222fa-8e8a-42b4-badc-9d8bd4b11382",
                            "nameProduct": null
                        }
                    ],
                    "reviews": []
                },
                {
                    "id": "19873807-b5d8-4409-b8c4-8889e91ce17d",
                    "name": "Sản phẩm 2",
                    "idBrand": "a22f4b5f-dc97-47bd-bdc1-efba3e86d532",
                    "nameBrand": "Thương hiệu 44",
                    "idCategory": "df194a76-d251-421d-95f1-16a336f21e89",
                    "nameCategory": "Loại số 33",
                    "idPathCategory": 7994164137361637543,
                    "pathCategory": "loai-so-33.html",
                    "price": 35,
                    "priceSale": 313,
                    "quantity": 21321,
                    "color": "3214",
                    "categoryDetails": "213",
                    "location": "214",
                    "path": "san-pham-2",
                    "idPath": 589934592,
                    "pathUserManual": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/[29-09-2021 09:09:19 GMT+0700 (Indochina Time)] == 470.BAI 8.pdf",
                    "description": "21321",
                    "status": true,
                    "dateCreated": "2021-09-29T02:09:44.000+00:00",
                    "pointReview": 0.0,
                    "details": null,
                    "images": [
                        {
                            "id": "0b24053e-c5d4-45eb-974d-6ce6ba26b0c4",
                            "path": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/[29-09-2021 09:09:29 GMT+0700 (Indochina Time)] == 844.z2799432239981_4c05ee2f629aa18fb81170d2e2e6ac53.jpg",
                            "idProduct": "19873807-b5d8-4409-b8c4-8889e91ce17d",
                            "nameProduct": null
                        },
                        {
                            "id": "f6646399-7422-4bd8-8c29-43d9ca7ff251",
                            "path": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/[29-09-2021 09:09:32 GMT+0700 (Indochina Time)] == 605.z2794947813894_09d9266620f8bd7bc7dd18702d9e9b8d.jpg",
                            "idProduct": "19873807-b5d8-4409-b8c4-8889e91ce17d",
                            "nameProduct": null
                        }
                    ],
                    "reviews": []
                },
                {
                    "id": "03259be7-900e-44af-9ef5-3db248ac65c4",
                    "name": "Sản phẩm 3",
                    "idBrand": "a22f4b5f-dc97-47bd-bdc1-efba3e86d532",
                    "nameBrand": "Thương hiệu 44",
                    "idCategory": "df194a76-d251-421d-95f1-16a336f21e89",
                    "nameCategory": "Loại số 33",
                    "idPathCategory": 7994164137361637543,
                    "pathCategory": "loai-so-33.html",
                    "price": 990000,
                    "priceSale": 1000,
                    "quantity": 990,
                    "color": "Vàng",
                    "categoryDetails": "Tráng gương",
                    "location": "Vị trí dó đó",
                    "path": "san-pham-3",
                    "idPath": 705032704,
                    "pathUserManual": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/[29-09-2021 15:07:18 GMT+0700 (Indochina Time)] == 884.BAI 9.pdf",
                    "description": "Mô tả thế đó",
                    "status": true,
                    "dateCreated": "2021-09-29T08:08:33.000+00:00",
                    "pointReview": 0.0,
                    "details": null,
                    "images": [
                        {
                            "id": "6dc0d142-1d56-41ff-bf90-a578d7eec165",
                            "path": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/[29-09-2021 15:07:22 GMT+0700 (Indochina Time)] == 343.z2799432239981_4c05ee2f629aa18fb81170d2e2e6ac53.jpg",
                            "idProduct": "03259be7-900e-44af-9ef5-3db248ac65c4",
                            "nameProduct": null
                        },
                        {
                            "id": "c1761b27-0966-45b7-a97a-da088dc55e00",
                            "path": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/[29-09-2021 15:07:24 GMT+0700 (Indochina Time)] == 643.z2794947813894_09d9266620f8bd7bc7dd18702d9e9b8d.jpg",
                            "idProduct": "03259be7-900e-44af-9ef5-3db248ac65c4",
                            "nameProduct": null
                        }
                    ],
                    "reviews": []
                },
                {
                    "id": "e6d369e5-fc0f-4a50-9e8e-f7f232e63283",
                    "name": "242432",
                    "idBrand": "a22f4b5f-dc97-47bd-bdc1-efba3e86d532",
                    "nameBrand": "Thương hiệu 44",
                    "idCategory": "df194a76-d251-421d-95f1-16a336f21e89",
                    "nameCategory": "Loại số 33",
                    "idPathCategory": 7994164137361637543,
                    "pathCategory": "loai-so-33.html",
                    "price": 45235532,
                    "priceSale": 4324,
                    "quantity": 43245,
                    "color": "4235",
                    "categoryDetails": "3244",
                    "location": "25423523",
                    "path": "242432",
                    "idPath": 690547413177802687,
                    "pathUserManual": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/[27-09-2021 22:11:45 GMT+0700 (Indochina Time)] == 078.BAI 9.pdf",
                    "description": "5234423",
                    "status": true,
                    "dateCreated": "2021-09-27T15:11:52.000+00:00",
                    "pointReview": 0.0,
                    "details": null,
                    "images": [],
                    "reviews": []
                },
                {
                    "id": "c18bc252-7144-4c83-a305-421b5e192002",
                    "name": "3213421",
                    "idBrand": "a22f4b5f-dc97-47bd-bdc1-efba3e86d532",
                    "nameBrand": "Thương hiệu 44",
                    "idCategory": "df194a76-d251-421d-95f1-16a336f21e89",
                    "nameCategory": "Loại số 33",
                    "idPathCategory": 7994164137361637543,
                    "pathCategory": "loai-so-33.html",
                    "price": 4123,
                    "priceSale": 14,
                    "quantity": 4213,
                    "color": "4122",
                    "categoryDetails": "4124",
                    "location": "1421",
                    "path": "3213421421412",
                    "idPath": 2312685293729403092,
                    "pathUserManual": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/[27-09-2021 22:24:28 GMT+0700 (Indochina Time)] == 551.BAI 8.pdf",
                    "description": "4124214",
                    "status": true,
                    "dateCreated": "2021-09-27T15:24:59.000+00:00",
                    "pointReview": 0.0,
                    "details": null,
                    "images": [],
                    "reviews": []
                },
                {
                    "id": "62271d42-634d-4469-883c-c5a84efe615f",
                    "name": "rqr32",
                    "idBrand": "a22f4b5f-dc97-47bd-bdc1-efba3e86d532",
                    "nameBrand": "Thương hiệu 44",
                    "idCategory": "df194a76-d251-421d-95f1-16a336f21e89",
                    "nameCategory": "Loại số 33",
                    "idPathCategory": 7994164137361637543,
                    "pathCategory": "loai-so-33.html",
                    "price": 42134,
                    "priceSale": 4421,
                    "quantity": 3124,
                    "color": "31214",
                    "categoryDetails": "21412",
                    "location": "4312",
                    "path": "rqr324",
                    "idPath": 6755832225886530675,
                    "pathUserManual": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/[27-09-2021 21:49:58 GMT+0700 (Indochina Time)] == 126.BAI 8.pdf",
                    "description": "312321",
                    "status": true,
                    "dateCreated": "2021-09-27T14:50:13.000+00:00",
                    "pointReview": 0.0,
                    "details": null,
                    "images": [],
                    "reviews": []
                },
                {
                    "id": "9777774a-d821-4844-9f6b-8239e08cd6ac",
                    "name": "4321412",
                    "idBrand": "idbrand-1",
                    "nameBrand": "Thương hiệu số 23",
                    "idCategory": "df194a76-d251-421d-95f1-16a336f21e89",
                    "nameCategory": "Loại số 33",
                    "idPathCategory": 7994164137361637543,
                    "pathCategory": "loai-so-33.html",
                    "price": 43214,
                    "priceSale": 4312,
                    "quantity": 413245,
                    "color": "",
                    "categoryDetails": "51234132",
                    "location": "",
                    "path": "4321412421324",
                    "idPath": 13211421,
                    "pathUserManual": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/[27-09-2021 22:27:35 GMT+0700 (Indochina Time)] == 271.BAI 8.pdf",
                    "description": "41234123",
                    "status": true,
                    "dateCreated": "2021-09-27T15:27:47.000+00:00",
                    "pointReview": 0.0,
                    "details": null,
                    "images": [
                        {
                            "id": "f3ee7d29-fadb-4131-9001-1f639b184c29",
                            "path": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/[27-09-2021 22:27:39 GMT+0700 (Indochina Time)] == 268.z2794947813894_09d9266620f8bd7bc7dd18702d9e9b8d.jpg",
                            "idProduct": "9777774a-d821-4844-9f6b-8239e08cd6ac",
                            "nameProduct": null
                        },
                        {
                            "id": "e7ab0c89-900f-439c-ad26-675c1178e3fe",
                            "path": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/[27-09-2021 22:27:42 GMT+0700 (Indochina Time)] == 508.Virtual Background - Webinar.jpg",
                            "idProduct": "9777774a-d821-4844-9f6b-8239e08cd6ac",
                            "nameProduct": null
                        }
                    ],
                    "reviews": []
                }
            ],
            "collectionCategories": []
        },
        {
            "id": "df194a76-d251-421d-95f1-16a336f21e89",
            "name": "Loại số 33",
            "banner": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/[13-09-2021 10:14:50 GMT+0700 (Giờ Đông Dương)] == 403.240717240_1149810682094963_8249301469011424542_n.jpg",
            "path": "loai-so-33.html",
            "idPath": 3412352324312,
            "description": "",
            "status": true,
            "dateCreated": "2021-09-13T03:17:22.000+00:00",
            "countProducts": 9,
            "products": [],
            "collectionCategories": []
        },
        {
            "id": "df194a76-d251-421d-95f1-16a336f21e89",
            "name": "Loại số 3763",
            "banner": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/[13-09-2021 10:14:50 GMT+0700 (Giờ Đông Dương)] == 403.240717240_1149810682094963_8249301469011424542_n.jpg",
            "path": "loai-so-33.html",
            "idPath": 34122352312,
            "description": "",
            "status": true,
            "dateCreated": "2021-09-13T03:17:22.000+00:00",
            "countProducts": 9,
            "products": [],
            "collectionCategories": []
        },
        {
            "id": "df194a76-d251-421d-95f1-16a336f21e89",
            "name": "Loại số 36543",
            "banner": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/[13-09-2021 10:14:50 GMT+0700 (Giờ Đông Dương)] == 403.240717240_1149810682094963_8249301469011424542_n.jpg",
            "path": "loai-so-33.html",
            "idPath": 34123523312,
            "description": "",
            "status": true,
            "dateCreated": "2021-09-13T03:17:22.000+00:00",
            "countProducts": 9,
            "products": [],
            "collectionCategories": []
        },
        {
            "id": "df194a76-d251-421d-95f1-16a336f21e89",
            "name": "Loại số 3321453153",
            "banner": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/[13-09-2021 10:14:50 GMT+0700 (Giờ Đông Dương)] == 403.240717240_1149810682094963_8249301469011424542_n.jpg",
            "path": "loai-so-33.html",
            "idPath": 3412353452312,
            "description": "",
            "status": true,
            "dateCreated": "2021-09-13T03:17:22.000+00:00",
            "countProducts": 9,
            "products": [],
            "collectionCategories": []
        },
        {
            "id": "df194a76-d251-421d-95f1-16a336f21e89",
            "name": "Loại số 33213",
            "banner": "https://raw.githubusercontent.com/ngocnqph12806/Repo_File/main/[13-09-2021 10:14:50 GMT+0700 (Giờ Đông Dương)] == 403.240717240_1149810682094963_8249301469011424542_n.jpg",
            "path": "loai-so-33.html",
            "idPath": 3412352547312,
            "description": "",
            "status": true,
            "dateCreated": "2021-09-13T03:17:22.000+00:00",
            "countProducts": 9,
            "products": [],
            "collectionCategories": []
        }
    ]);

    const [ListCollections, setListCollections] = useState([
        {
            "id": "d3095a74-1c9e-4f53-8bf2-fbbe5da28a98",
            "name": "Danh mục 7",
            "description": null,
            "status": false,
            "dateCreated": "2021-09-20T09:08:44.000+00:00",
            "countProducts": 0
        },
        {
            "id": "collection-1",
            "name": "Tên danh mục 3",
            "description": "Mô tả collections 1",
            "status": true,
            "dateCreated": "2021-09-12T01:49:01.000+00:00",
            "countProducts": 6
        },
        {
            "id": "cd659c55-1d66-4e83-91f0-583ce4e92e2d",
            "name": "Danh mục 3",
            "description": null,
            "status": true,
            "dateCreated": "2021-09-20T09:06:55.000+00:00",
            "countProducts": 0
        }
    ]);

    const [ListOrders, setListOrders] = useState([
        {
            "id": 1,
            "idUser": 2,
            "nameUser": "NQN",
            "idCreator": 2,
            "nameCreator": "Thể loại 2",
            "idSaller": 2,
            "nameSaller": "NQN",
            "paymentMethod": "qrcode",
            "paymentStatus": true,
            "description": "MÔ tả giao dịch 1",
            "status": true,
            "dateCreated": "2021-09-30",
            "details": [],
            "transports": null
        },
        {
            "id": 2,
            "idUser": 2,
            "nameUser": "NQN",
            "idCreator": 3,
            "nameCreator": "Thể loại 2",
            "idSaller": 3,
            "nameSaller": "NQN1",
            "paymentMethod": "qrcode",
            "paymentStatus": false,
            "description": "MÔ tả giao dịch 2",
            "status": true,
            "dateCreated": "2021-09-30",
            "details": [],
            "transports": []
        }
    ]);

    useEffect(() => {
        setCart(getLocalStorage("cart"))
        // const getListProducts = async () => {
        //     try {
        //         let response = await ProductAPI.getAll();
        //         setListProducts([...response.data])
        //     } catch (e) {
        //         console.log("Không thể đọc danh sách sản phẩm");
        //     }
        // }
        // getListProducts();
        // const getListBrands = async () => {
        //     try {
        //         let response = await ProductAPI.getAll();
        //         setListProducts([...response.data])
        //     } catch (e) {
        //         console.log("Không thể đọc danh sách sản phẩm");
        //     }
        // }
        // getListBrands();
        setCart(getLocalStorage("cart"))
    }, []);

    return (
        <>
            <RouterDOM
                listProducts={ListProducts}
                listBanners={ListBanners}
                listCategories={ListCategories}
                listBrands={ListBrands}
                listCollections={ListCollections}
                listOrders={ListOrders}
                filterPrice={filterPrice}
                filterColor={filterColor}
                cart={cart}
                setCart={fnAddCart}
                totalPriceCart={totalPriceCart}
                setCodeVoucher={fnSetCoceVoucher}
                codeVoucher={codeVoucher}
            />
        </>
    );
};

export default App;

