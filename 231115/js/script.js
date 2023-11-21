const reviews = [
            ['images/saefte.jpg', 'Montag', '50 % auf alle alkoholfreien Getränke'],
            ['images/obstgemuese.jpg', 'Dienstag', 'Sonderangebot für Obst und Gemüse'],
            ['images/tiefkühlprodukte.jpg', 'Mittwoch', '15 % auf alle Tiefkühlprodukte'],
            ['images/gebaeckwaren.jpg', 'Donnerstag', 'Sonderangebot für süße Gebäckwaren'],
            ['images/wurstwaren.jpg', 'Freitag', '20 % auf alle Wurstwaren'],
            ['images/fisch.jpg', 'Samstag', 'Sonderangebot 10 % für frisches Fisch'],
            ['images/brot.jpg', 'Sonntag', 'Ab 12 Uhr kaufe 2 Brote und bekomme eins gratis'],
        ];

        function generateCoupons() {
            const weeks = document.getElementById('weeksInput').value;
            const couponsContainer = document.getElementById('couponsContainer');
            couponsContainer.innerHTML = '';

            for (let i = 0; i < weeks; i++) {
                const weekContainer = document.createElement('div');
                weekContainer.className = 'week';

                for (const coupon of reviews) {
                    const couponDiv = document.createElement('div');
                    couponDiv.className = 'coupon';

                    const couponImage = document.createElement('img');
                    couponImage.src = coupon[0];
                    couponDiv.appendChild(couponImage);

                    const couponInfo = document.createElement('p');
                    couponInfo.textContent = `${coupon[1]}: ${coupon[2]}`;
                    couponDiv.appendChild(couponInfo);

                    weekContainer.appendChild(couponDiv);
                }

                couponsContainer.appendChild(weekContainer);
            }
        }