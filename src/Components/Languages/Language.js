import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next).init({
    lng: "VN",
    resources: {
        EN: {
            translation: {
                freeship: 'FreeShipp nationwide',
                contact: 'Contact',
                homepage: 'Home',
                category: 'Category',
                sale: 'Sale',
                hello: 'Hello',
                author: 'Author',
                publisher: 'Publisher',
                release: 'Release',
                ship: 'Shipping',
                genre: 'Genre',
                rating: 'Rating',
                description: 'Description',
                sold: 'Sold',
                amount: 'Amount',
                AddToCart: 'Add to cart',
                buy: 'Buy',
                response: 'Online 24/7',
                back: '7 days refund',
                ratingProduct: 'Rating Product',
                commented: 'Please leave your review',
                writecmt: 'Comment here...',
                post: 'Post',
                star: 'star',
                search: 'Enter your book...',
                result: 'The result for ',
                sorted: 'Sorted',
                newBook: 'New Book',
                updown: 'High to low',
                downup: 'Low to high',
                soldedAmount: 'Solded amount',
                info: 'Your profile',
                username: 'User name',
                address: 'Address',
                phonenumber: 'Phone number',
                change: 'Change',
                save: 'Save',
                chooseImg: 'Choose image',
                myorder: 'My order',
                mycmt: 'My comment',
                processed: 'Processed',
                processing: 'Processing',
                shipping: 'Shipping',
                completed: 'Completed',
                canceled: 'Cancel',
                none: 'Have nothing here',
                login: 'Login',
                signup: 'Sign up',
                logout: 'Log out',
                end: 'Finishing after',
                express: 'Express',
                updating: 'Updating',
                remain: 'Remaining ',
                book: 'books',
                delete: 'Delete',
                join: 'Joined',
                cmt: 'Comment',
                account: 'Account',
                confirm: 'Confirm',
                return: 'Back'
            }
        },
        VN: {
            translation: {
                freeship: 'Freeship toán quốc',
                updating: 'Đang cập nhật',
                contact: 'Liên hệ',
                homepage: 'Trang chủ',
                category: 'Danh mục',
                sale: 'Ưu đãi',
                hello: 'Xin chào',
                author: 'Tác giả',
                publisher: 'Nhà xuất bản',
                release: 'Ngày xuất bản',
                ship: 'Vận chuyển',
                genre: 'Thể loại',
                rating: 'Đánh giá',
                description: 'Giới thiệu',
                sold: 'Đã bán',
                amount: 'Số lượng',
                AddToCart: 'Thêm vào giỏ',
                buy: 'Mua hàng',
                response: 'Phản hồi 24/7',
                back: '7 ngày hoàn trả',
                ratingProduct: 'Đánh giá sản phẩm',
                commented: 'Để lại đánh giá của bạn nhé',
                writecmt: 'Viết đánh giá ở đây...',
                post: 'Đăng',
                star: 'Sao',
                search: 'Nhập tên sách tìm kiếm',
                result: 'Kết quả tìm kiếm cho ',
                sorted: 'Sắp xếp theo',
                soldedAmount: 'Lượng mua',
                info: 'Thông tin tài khoản',
                username: 'Tên tài khoản',
                address: 'Địa chỉ',
                phonenumber: 'Số điện thoại',
                change: 'Thay đổi',
                save: 'Lưu thay đổi',
                chooseImg: 'Chọn ảnh',
                myorder: 'Đơn hàng của tôi',
                mycmt: 'Bình luận của tôi',
                processed: 'Đã xử lý',
                processing: 'Đang xử lý',
                shipping: 'Đang vận chuyển',
                completed: 'Hoàn thành',
                canceled: 'Đã hủy',
                none: 'Không có đơn hàng nào',
                login: 'Đăng nhập',
                signup: 'Đăng ký',
                logout: 'Đăng xuất',
                end: 'Kết thúc sau',
                express: 'Vận chuyển',
                remain: 'Chỉ còn lại ',
                book: 'cuốn',
                delete: 'Xóa',
                join: 'Tham gia',
                cmt: 'Bình luận',
                account: 'Tài khoản',
                confirm: 'Xác nhận',
                return: 'Trở về'
            }
        }
    },
    interpolation: { escapeValue: false }
});

export default i18n;