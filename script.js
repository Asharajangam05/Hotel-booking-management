// ================= GLOBAL VARIABLES =================

let selectedHotelName = "";
let selectedHotelPrice = 0;


// ================= DATE SETUP =================

const today = new Date();

const todayString =
    today.toISOString().split("T")[0];


// Set minimum dates

document.getElementById("checkin").min =
    todayString;

document.getElementById("checkout").min =
    todayString;

document.getElementById("bookingCheckin").min =
    todayString;

document.getElementById("bookingCheckout").min =
    todayString;


// ================= SEARCH FORM =================

document
    .getElementById("searchForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const destination =
            document.getElementById("destination").value;

        const checkin =
            document.getElementById("checkin").value;

        const checkout =
            document.getElementById("checkout").value;

        const guests =
            document.getElementById("guests").value;


        // Date validation

        if (new Date(checkout) <= new Date(checkin)) {

            alert(
                "Check-out date must be after check-in date."
            );

            return;
        }


        alert(
            "Searching hotels in " +
            destination +
            " for " +
            guests +
            " guest(s)."
        );


        // Scroll to hotel section

        document
            .getElementById("hotels")
            .scrollIntoView({
                behavior: "smooth"
            });

});


// ================= OPEN BOOKING =================

function openBooking(hotelName, hotelPrice) {

    selectedHotelName = hotelName;

    selectedHotelPrice = hotelPrice;


    document
        .getElementById("selectedHotel")
        .textContent = hotelName;


    document
        .getElementById("roomPrice")
        .textContent =
        hotelPrice.toLocaleString("en-IN");


    document
        .getElementById("numberOfNights")
        .textContent = "0";


    document
        .getElementById("totalPrice")
        .textContent = "0";


    document
        .getElementById("bookingModal")
        .style.display = "flex";
}


// ================= CLOSE BOOKING =================

function closeBooking() {

    document
        .getElementById("bookingModal")
        .style.display = "none";
}


// ================= BOOKING DATE CALCULATION =================

const bookingCheckin =
    document.getElementById("bookingCheckin");

const bookingCheckout =
    document.getElementById("bookingCheckout");


bookingCheckin.addEventListener(
    "change",
    function() {

        const selectedDate =
            bookingCheckin.value;


        if (selectedDate) {

            bookingCheckout.min =
                selectedDate;

        }

        calculatePrice();

    }
);


bookingCheckout.addEventListener(
    "change",
    calculatePrice
);


// ================= CALCULATE PRICE =================

function calculatePrice() {

    const checkin =
        bookingCheckin.value;

    const checkout =
        bookingCheckout.value;


    if (!checkin || !checkout) {

        return;

    }


    const startDate =
        new Date(checkin);

    const endDate =
        new Date(checkout);


    if (endDate <= startDate) {

        document
            .getElementById("numberOfNights")
            .textContent = "0";


        document
            .getElementById("totalPrice")
            .textContent = "0";


        return;
    }


    const difference =
        endDate - startDate;


    const nights =
        Math.ceil(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const total =
        nights *
        selectedHotelPrice;


    document
        .getElementById("numberOfNights")
        .textContent = nights;


    document
        .getElementById("totalPrice")
        .textContent =
        total.toLocaleString("en-IN");

}


// ================= BOOKING FORM =================

document
    .getElementById("bookingForm")
    .addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document
                    .getElementById("customerName")
                    .value;


            const email =
                document
                    .getElementById("customerEmail")
                    .value;


            const phone =
                document
                    .getElementById("customerPhone")
                    .value;


            const checkin =
                document
                    .getElementById("bookingCheckin")
                    .value;


            const checkout =
                document
                    .getElementById("bookingCheckout")
                    .value;


            const guests =
                document
                    .getElementById("bookingGuests")
                    .value;


            if (
                !checkin ||
                !checkout
            ) {

                alert(
                    "Please select check-in and check-out dates."
                );

                return;
            }


            if (
                new Date(checkout) <=
                new Date(checkin)
            ) {

                alert(
                    "Check-out date must be after check-in date."
                );

                return;
            }


            const startDate =
                new Date(checkin);

            const endDate =
                new Date(checkout);


            const nights =
                Math.ceil(
                    (endDate - startDate) /
                    (1000 * 60 * 60 * 24)
                );


            const total =
                nights *
                selectedHotelPrice;


            const bookingID =
                "ST" +
                Math.floor(
                    100000 +
                    Math.random() * 900000
                );


            alert(

                "BOOKING CONFIRMED!\n\n" +

                "Booking ID: " +
                bookingID +
                "\n" +

                "Hotel: " +
                selectedHotelName +
                "\n" +

                "Guest: " +
                name +
                "\n" +

                "Email: " +
                email +
                "\n" +

                "Phone: " +
                phone +
                "\n" +

                "Guests: " +
                guests +
                "\n" +

                "Nights: " +
                nights +
                "\n" +

                "Total Amount: ₹" +
                total.toLocaleString("en-IN")
            );


            closeBooking();


            document
                .getElementById("bookingForm")
                .reset();

        }
    );


// ================= LOGIN =================

function openLogin() {

    document
        .getElementById("loginModal")
        .style.display = "flex";
}


function closeLogin() {

    document
        .getElementById("loginModal")
        .style.display = "none";
}


document
    .getElementById("loginForm")
    .addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            alert(
                "Login successful!"
            );


            closeLogin();


            document
                .getElementById("loginForm")
                .reset();

        }
    );


// ================= CONTACT =================

document
    .getElementById("contactForm")
    .addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document
                    .getElementById("contactName")
                    .value;


            alert(
                "Thank you, " +
                name +
                "! Your message has been sent."
            );


            document
                .getElementById("contactForm")
                .reset();

        }
    );


// ================= CLOSE MODAL WHEN CLICKING OUTSIDE =================

window.addEventListener(
    "click",
    function(event) {

        const bookingModal =
            document.getElementById(
                "bookingModal"
            );

        const loginModal =
            document.getElementById(
                "loginModal"
            );


        if (event.target === bookingModal) {

            closeBooking();

        }


        if (event.target === loginModal) {

            closeLogin();

        }

    }
);