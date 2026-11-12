window.tailwind = window.tailwind || {};
window.tailwind.config = {
    theme: {
        extend: {
            fontFamily: { sans: ['Inter', 'sans-serif'] },
            colors: {
                jak: {
                    navy: '#152923',
                    blue: '#087f5b',
                    accent: '#c9f06a',
                    light: '#f4f7f5',
                    charcoal: '#3d5149'
                }
            }
        }
    }
};

function jakMartApp() {
            return {
                activePage: 'home',
                cartDrawerOpen: false,
                adminModal: false,
                paymentModal: false,
                loginModal: false,
                loginRole: 'customer',
                loginForm: { username: '', password: '' },
                currentUser: null,
                selectedProduct: null,
                detailMode: 'b2c',
                detailQty: 1,
                paymentMethod: 'qris',
                paymentBank: 'bca',
                virtualAccountNumber: '',
                toast: { show: false, message: '' },
                cart: [],
                filters: { search: '', category: 'All', wholesaleOnly: false },
                adminForm: { id: null, name: '', retailPrice: 0, stock: 0, image: '', category: 'Sembako & Dapur', wholesale: false, wholesalePrice: 0, moq: 1, description: '' },
                bankAccounts: {
                    bca: { name: 'BCA', number: '1234567890' },
                    bri: { name: 'BRI', number: '012301000123456' },
                    bni: { name: 'BNI', number: '0987654321' }
                },

                categories: [
                    { name: 'Sembako & Dapur', subtitle: 'Beras, Minyak, Mi, Kopi' },
                    { name: 'Elektronik & Gadget', subtitle: 'HP, Audio, Aksesori' },
                    { name: 'Fashion & Pakaian', subtitle: 'Batik, Hijab, Alas Kaki' },
                    { name: 'Kuliner & Segar', subtitle: 'Daging, Telur, Buah, Sayur' },
                    { name: 'Rumah Tangga', subtitle: 'Pembersih & Perlengkapan' },
                    { name: 'Kesehatan', subtitle: 'Vitamin & Perawatan Diri' }
                ],

                products: [
                    { id: 1, name: 'Beras Premium Pulen 5kg', category: 'Sembako & Dapur', retailPrice: 68000, wholesale: true, wholesalePrice: 62000, moq: 5, stock: 120, image: 'https://images.pexels.com/photos/5167396/pexels-photo-5167396.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Beras putih pilihan yang pulen untuk kebutuhan dapur keluarga.' },
                    { id: 2, name: 'Minyak Goreng Sawit 2L', category: 'Sembako & Dapur', retailPrice: 34000, wholesale: true, wholesalePrice: 31000, moq: 10, stock: 85, image: 'https://images.pexels.com/photos/31275834/pexels-photo-31275834.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Minyak goreng sawit untuk memasak sehari-hari.' },
                    { id: 3, name: 'TWS Wireless Earbuds Pro', category: 'Elektronik & Gadget', retailPrice: 199000, wholesale: false, wholesalePrice: 0, moq: 1, stock: 40, image: 'https://images.pexels.com/photos/33797659/pexels-photo-33797659.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Earbuds nirkabel untuk mendengarkan musik dan menerima panggilan.' },
                    { id: 4, name: 'Daging Sapi Segar 500g', category: 'Kuliner & Segar', retailPrice: 75000, wholesale: true, wholesalePrice: 70000, moq: 3, stock: 25, image: 'https://images.pexels.com/photos/36319691/pexels-photo-36319691.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Daging sapi segar untuk aneka masakan rumahan.' },
                    { id: 5, name: 'Pembersih Lantai Lemon 1L', category: 'Rumah Tangga', retailPrice: 18500, wholesale: true, wholesalePrice: 16000, moq: 12, stock: 90, image: 'https://images.pexels.com/photos/5217898/pexels-photo-5217898.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Cairan pembersih rumah untuk menjaga lantai tetap bersih.' },
                    { id: 6, name: 'Vitamin C 1000mg Botol 30 Tab', category: 'Kesehatan', retailPrice: 45000, wholesale: false, wholesalePrice: 0, moq: 1, stock: 60, image: 'https://images.pexels.com/photos/13787564/pexels-photo-13787564.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Suplemen vitamin C dalam bentuk tablet.' },
                    { id: 7, name: 'Gula Pasir Putih 1kg', category: 'Sembako & Dapur', retailPrice: 18000, wholesale: true, wholesalePrice: 16500, moq: 10, stock: 100, image: 'https://images.pexels.com/photos/7033660/pexels-photo-7033660.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Gula pasir putih untuk minuman dan masakan.' },
                    { id: 8, name: 'Mi Instan Goreng Isi 5', category: 'Sembako & Dapur', retailPrice: 16000, wholesale: true, wholesalePrice: 14500, moq: 10, stock: 140, image: 'https://images.pexels.com/photos/39007274/pexels-photo-39007274.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Mi instan goreng praktis yang mudah ditemukan di Indonesia.' },
                    { id: 9, name: 'Kopi Bubuk Kapal Api 165g', category: 'Sembako & Dapur', retailPrice: 19000, wholesale: true, wholesalePrice: 17500, moq: 6, stock: 75, image: 'https://images.pexels.com/photos/16682442/pexels-photo-16682442.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Kopi bubuk untuk diseduh di rumah.' },
                    { id: 10, name: 'Xiaomi Redmi Note 13', category: 'Elektronik & Gadget', retailPrice: 2399000, wholesale: false, wholesalePrice: 0, moq: 1, stock: 18, image: 'https://images.pexels.com/photos/6901037/pexels-photo-6901037.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Smartphone Android yang tersedia di pasar Indonesia.' },
                    { id: 11, name: 'Power Bank 10000mAh', category: 'Elektronik & Gadget', retailPrice: 189000, wholesale: false, wholesalePrice: 0, moq: 1, stock: 35, image: 'https://images.pexels.com/photos/6296911/pexels-photo-6296911.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Baterai portabel untuk mengisi daya ponsel saat bepergian.' },
                    { id: 12, name: 'Charger USB-C 25W', category: 'Elektronik & Gadget', retailPrice: 129000, wholesale: false, wholesalePrice: 0, moq: 1, stock: 42, image: 'https://images.pexels.com/photos/35921904/pexels-photo-35921904.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Adaptor pengisian daya USB-C untuk perangkat yang kompatibel.' },
                    { id: 13, name: 'Speaker Bluetooth Mini', category: 'Elektronik & Gadget', retailPrice: 249000, wholesale: false, wholesalePrice: 0, moq: 1, stock: 20, image: 'https://images.pexels.com/photos/374110/pexels-photo-374110.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Speaker portabel untuk memutar musik dari ponsel.' },
                    { id: 14, name: 'Kemeja Batik Pria', category: 'Fashion & Pakaian', retailPrice: 145000, wholesale: false, wholesalePrice: 0, moq: 1, stock: 32, image: 'https://images.pexels.com/photos/34402673/pexels-photo-34402673.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Kemeja bermotif batik untuk acara formal maupun sehari-hari.' },
                    { id: 15, name: 'Hijab Segi Empat Polos', category: 'Fashion & Pakaian', retailPrice: 35000, wholesale: false, wholesalePrice: 0, moq: 1, stock: 55, image: 'https://images.pexels.com/photos/8069812/pexels-photo-8069812.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Hijab segi empat yang mudah dipadukan dengan pakaian harian.' },
                    { id: 16, name: 'Sandal Jepit Harian', category: 'Fashion & Pakaian', retailPrice: 28000, wholesale: true, wholesalePrice: 24000, moq: 6, stock: 70, image: 'https://images.pexels.com/photos/23692992/pexels-photo-23692992.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Sandal jepit ringan untuk pemakaian sehari-hari.' },
                    { id: 17, name: 'Sepatu Sneakers Kasual', category: 'Fashion & Pakaian', retailPrice: 219000, wholesale: false, wholesalePrice: 0, moq: 1, stock: 24, image: 'https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Sepatu kasual untuk aktivitas harian.' },
                    { id: 18, name: 'Tas Ransel Sekolah', category: 'Fashion & Pakaian', retailPrice: 159000, wholesale: false, wholesalePrice: 0, moq: 1, stock: 28, image: 'https://images.pexels.com/photos/37580640/pexels-photo-37580640.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Tas ransel untuk sekolah dan aktivitas sehari-hari.' },
                    { id: 19, name: 'Daging Ayam Segar 1kg', category: 'Kuliner & Segar', retailPrice: 38000, wholesale: true, wholesalePrice: 35000, moq: 3, stock: 40, image: 'https://images.pexels.com/photos/13524831/pexels-photo-13524831.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Daging ayam segar untuk lauk dan masakan rumahan.' },
                    { id: 20, name: 'Telur Ayam Negeri 1kg', category: 'Kuliner & Segar', retailPrice: 30000, wholesale: true, wholesalePrice: 28000, moq: 5, stock: 65, image: 'https://images.pexels.com/photos/4110225/pexels-photo-4110225.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Telur ayam untuk kebutuhan dapur harian.' },
                    { id: 21, name: 'Pisang Ambon 1 Sisir', category: 'Kuliner & Segar', retailPrice: 22000, wholesale: true, wholesalePrice: 19000, moq: 5, stock: 45, image: 'https://images.pexels.com/photos/31558745/pexels-photo-31558745.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Pisang ambon segar sebagai buah dan camilan.' },
                    { id: 22, name: 'Tomat Merah 500g', category: 'Kuliner & Segar', retailPrice: 12000, wholesale: true, wholesalePrice: 10000, moq: 5, stock: 52, image: 'https://images.pexels.com/photos/29479888/pexels-photo-29479888.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Tomat merah segar untuk sambal dan masakan.' },
                    { id: 23, name: 'Sabun Cuci Piring 800ml', category: 'Rumah Tangga', retailPrice: 16000, wholesale: true, wholesalePrice: 14000, moq: 6, stock: 80, image: 'https://images.pexels.com/photos/10566513/pexels-photo-10566513.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Sabun cair untuk membersihkan peralatan makan.' },
                    { id: 24, name: 'Detergen Bubuk 1.8kg', category: 'Rumah Tangga', retailPrice: 32000, wholesale: true, wholesalePrice: 29000, moq: 6, stock: 58, image: 'https://images.pexels.com/photos/10566507/pexels-photo-10566507.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Detergen untuk mencuci pakaian dengan tangan atau mesin.' },
                    { id: 25, name: 'Tisu Wajah 2 Ply 250 Lembar', category: 'Rumah Tangga', retailPrice: 14000, wholesale: true, wholesalePrice: 12500, moq: 6, stock: 95, image: 'https://images.pexels.com/photos/3963108/pexels-photo-3963108.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Tisu lembut untuk kebutuhan rumah dan kantor.' },
                    { id: 26, name: 'Alat Pel Lantai Gagang Panjang', category: 'Rumah Tangga', retailPrice: 55000, wholesale: false, wholesalePrice: 0, moq: 1, stock: 22, image: 'https://images.pexels.com/photos/15336533/pexels-photo-15336533.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Alat pel untuk membersihkan lantai rumah.' },
                    { id: 27, name: 'Masker Medis 3 Ply Isi 50', category: 'Kesehatan', retailPrice: 18000, wholesale: true, wholesalePrice: 15000, moq: 5, stock: 100, image: 'https://images.pexels.com/photos/3786155/pexels-photo-3786155.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Masker sekali pakai untuk membantu menutup hidung dan mulut.' },
                    { id: 28, name: 'Plester Luka Isi 10', category: 'Kesehatan', retailPrice: 9000, wholesale: false, wholesalePrice: 0, moq: 1, stock: 75, image: 'https://images.pexels.com/photos/5721552/pexels-photo-5721552.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Plester perekat untuk menutup luka kecil.' },
                    { id: 29, name: 'Pasta Gigi Pepsodent 190g', category: 'Kesehatan', retailPrice: 14500, wholesale: true, wholesalePrice: 13000, moq: 6, stock: 68, image: 'https://images.pexels.com/photos/6322805/pexels-photo-6322805.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Pasta gigi untuk perawatan kebersihan gigi sehari-hari.' },
                    { id: 30, name: 'Sunscreen Wajah SPF 50', category: 'Kesehatan', retailPrice: 52000, wholesale: false, wholesalePrice: 0, moq: 1, stock: 36, image: 'https://images.pexels.com/photos/16615430/pexels-photo-16615430.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Tabir surya untuk membantu melindungi kulit saat beraktivitas di luar.' }
                ],

                get selectedBankName() {
                    return this.bankAccounts[this.paymentBank].name;
                },

                get paymentMethodLabel() {
                    if (this.paymentMethod === 'qris') return 'QRIS (demo)';
                    if (this.paymentMethod === 'va') return 'Virtual Account ' + this.selectedBankName;
                    return 'Transfer bank ' + this.selectedBankName;
                },

                get qrisImageUrl() {
                    const demoPayload = `DEMO-MUHAMMAD-REZA-${this.formatRupiah(this.cartSubtotal + 15000)}`;
                    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(demoPayload)}`;
                },

                openAdminLogin() {
                    this.loginRole = 'admin';
                    this.loginForm = { username: '', password: '' };
                    this.loginModal = true;
                },

                submitLogin() {
                    const isCustomer = this.loginRole === 'customer'
                        && this.loginForm.username === 'user'
                        && this.loginForm.password === 'user123';
                    const isAdmin = this.loginRole === 'admin'
                        && this.loginForm.username === 'admin'
                        && this.loginForm.password === 'admin123';

                    if (isCustomer) {
                        this.currentUser = { name: 'Muhammad Reza', email: 'user@jakmart.demo', role: 'customer' };
                    } else if (isAdmin) {
                        this.currentUser = { name: 'Muhammad Reza', email: 'admin@jakmart.demo', role: 'admin' };
                    } else {
                        this.showToast('Username atau password tidak sesuai.');
                        return;
                    }

                    this.activePage = 'home';
                    this.adminModal = isAdmin;
                    this.loginModal = false;
                    this.loginForm = { username: '', password: '' };
                    this.showToast(isAdmin ? 'Login admin demo berhasil.' : 'Login user demo berhasil.');
                },

                logout() {
                    this.currentUser = null;
                    this.adminModal = false;
                    this.loginModal = false;
                    this.loginRole = 'customer';
                    this.loginForm = { username: '', password: '' };
                    this.showToast('Anda telah keluar dari akun.');
                },

                proceedToCheckout() {
                    if (!this.currentUser) {
                        this.cartDrawerOpen = false;
                        this.loginRole = 'customer';
                        this.loginModal = false;
                        this.showToast('Silakan login terlebih dahulu untuk checkout.');
                        return;
                    }
                    this.cartDrawerOpen = false;
                    this.navigate('checkout');
                },

                get filteredProducts() {
                    return this.products.filter(p => {
                        let matchSearch = p.name.toLowerCase().includes(this.filters.search.toLowerCase()) || p.category.toLowerCase().includes(this.filters.search.toLowerCase());
                        let matchCat = this.filters.category === 'All' || p.category === this.filters.category;
                        let matchWholesale = !this.filters.wholesaleOnly || p.wholesale;
                        return matchSearch && matchCat && matchWholesale;
                    });
                },

                get cartSubtotal() {
                    return this.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
                },

                get cartTotalQty() {
                    return this.cart.reduce((sum, item) => sum + item.qty, 0);
                },

                formatRupiah(num) {
                    return 'Rp ' + num.toLocaleString('id-ID');
                },

                navigate(page) {
                    this.activePage = page;
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                },

                filterByCategory(catName) {
                    this.filters.category = catName;
                    this.navigate('catalog');
                },

                openProductDetail(product) {
                    this.selectedProduct = product;
                    this.detailMode = 'b2c';
                    this.detailQty = product.wholesale ? product.moq : 1;
                    this.navigate('detail');
                },

                addToCart(product, mode = 'b2c', qty = 1) {
                    let price = (mode === 'b2b' && product.wholesale) ? product.wholesalePrice : product.retailPrice;
                    let existing = this.cart.find(i => i.product.id === product.id);
                    if (existing) {
                        existing.qty += qty;
                    } else {
                        this.cart.push({ product: product, price: price, qty: qty, mode: mode });
                    }
                    this.showToast('Produk ditambahkan ke keranjang');
                },

                addToCartFromDetail() {
                    if (!this.selectedProduct) return;
                    this.addToCart(this.selectedProduct, this.detailMode, this.detailQty);
                    this.cartDrawerOpen = true;
                },

                updateCartQty(productId, newQty) {
                    if (newQty <= 0) {
                        this.removeFromCart(productId);
                        return;
                    }
                    let item = this.cart.find(i => i.product.id === productId);
                    if (item) item.qty = newQty;
                },

                removeFromCart(productId) {
                    this.cart = this.cart.filter(i => i.product.id !== productId);
                },

                showToast(msg) {
                    this.toast.message = msg;
                    this.toast.show = true;
                    setTimeout(() => { this.toast.show = false; }, 2500);
                },

                editProduct(product) {
                    this.adminForm = { ...product };
                    this.$refs.adminImageFile.value = '';
                },

                handleImageUpload(event) {
                    const input = event.target;
                    const file = input.files && input.files[0];
                    if (!file) return;

                    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
                    if (!allowedTypes.includes(file.type)) {
                        input.value = '';
                        this.showToast('Pilih gambar JPG, PNG, atau WEBP.');
                        return;
                    }

                    if (file.size > 5 * 1024 * 1024) {
                        input.value = '';
                        this.showToast('Ukuran gambar maksimal 5 MB.');
                        return;
                    }

                    const reader = new FileReader();
                    reader.onload = () => {
                        if (typeof reader.result !== 'string') {
                            this.showToast('Gambar tidak dapat dibaca.');
                            return;
                        }

                        this.adminForm.image = reader.result;
                        this.showToast('Gambar produk berhasil dimuat.');
                    };
                    reader.onerror = () => this.showToast('Gagal membaca gambar produk.');
                    reader.readAsDataURL(file);
                    input.value = '';
                },

                clearAdminImage() {
                    this.adminForm.image = '';
                    this.$refs.adminImageFile.value = '';
                },

                saveAdminProduct() {
                    if (!this.adminForm.name || !this.adminForm.retailPrice) {
                        this.showToast('Mohon isi nama dan harga produk.');
                        return;
                    }
                    if (!this.adminForm.image) {
                        this.showToast('Upload gambar produk terlebih dahulu.');
                        return;
                    }
                    if (this.adminForm.id) {
                        let idx = this.products.findIndex(p => p.id === this.adminForm.id);
                        if (idx !== -1) {
                            this.products[idx] = { ...this.adminForm };
                        }
                    } else {
                        let newId = this.products.length ? Math.max(...this.products.map(p => p.id)) + 1 : 1;
                        this.products.push({
                            id: newId,
                            name: this.adminForm.name,
                            category: this.adminForm.category || 'Sembako & Dapur',
                            retailPrice: Number(this.adminForm.retailPrice),
                            wholesale: this.adminForm.wholesale || false,
                            wholesalePrice: Number(this.adminForm.wholesalePrice) || Number(this.adminForm.retailPrice) * 0.9,
                            moq: Number(this.adminForm.moq) || 5,
                            stock: Number(this.adminForm.stock) || 50,
                            image: this.adminForm.image,
                            description: this.adminForm.description || 'Produk berkualitas tinggi dari JakMart.'
                        });
                    }
                    this.adminForm = { id: null, name: '', retailPrice: 0, stock: 0, image: '', category: 'Sembako & Dapur', wholesale: false, wholesalePrice: 0, moq: 1, description: '' };
                    this.$refs.adminImageFile.value = '';
                    this.showToast('Data produk berhasil disimpan.');
                },

                submitCheckout() {
                    if (this.cart.length === 0) return;
                    if (this.paymentMethod === 'va') {
                        const bankCode = { bca: '014', bri: '002', bni: '009' }[this.paymentBank];
                        const uniqueSuffix = String(Date.now()).slice(-8) + String(Math.floor(Math.random() * 1000)).padStart(3, '0');
                        this.virtualAccountNumber = `880${bankCode}${uniqueSuffix}`;
                    }
                    this.paymentModal = true;
                },

    finishPaymentSimulation() {
                    this.paymentModal = false;
                    this.cart = [];
        this.showToast('Simulasi selesai. Tidak ada pembayaran sungguhan yang diproses.');
                    this.navigate('home');
                }
            };
        }