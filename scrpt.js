
document.addEventListener("DOMContentLoaded", function () {
    var currentDetailsBox = null;
    var currentReadButton = null;

    function showDetails(detailsBoxId, readButtonId, texts, imageSrcs, iframeSrc) {
        if (currentDetailsBox && currentReadButton) {
            currentDetailsBox.style.display = "none";
            currentReadButton.style.display = "inline";
        }

        var detailsBox = document.getElementById(detailsBoxId);
        var readButton = document.getElementById(readButtonId);

        // Clear previous content
        detailsBox.innerHTML = '';

        // Loop through each text and image source
        for (var i = 0; i < texts.length; i++) {
            // Create image element if image source is provided
            if (imageSrcs[i]) {
                var img = document.createElement('img');
                img.src = imageSrcs[i];
                img.style.width = '100%';
                detailsBox.appendChild(img);
            }

            // Create paragraph element
            var paragraph = document.createElement('p');
            paragraph.textContent = texts[i];
            detailsBox.appendChild(paragraph);
        }

        // Add iframe if provided
        if (iframeSrc) {
            var iframe = document.createElement('iframe');
            iframe.src = iframeSrc;
            iframe.width = '100%';
            iframe.height = '250'; // Adjust height as needed
            iframe.style.border = '0';
            iframe.allowfullscreen = '';
            iframe.loading = 'lazy';
            iframe.referrerpolicy = 'no-referrer-when-downgrade';
            detailsBox.appendChild(iframe);
        }

        detailsBox.style.display = "block";
        readButton.style.display = "none";

        currentDetailsBox = detailsBox;
        currentReadButton = readButton;
    }

    document.getElementById("read1").onclick = function () {
        showDetails("details1", "read1", ["Khirthar National Park in Sindh, Pakistan, hosts diverse wildlife including the Sindh Ibex, Urial, Chinkara, Indian Leopard, and Striped Hyena, alongside notable bird species like the Houbara Bustard and Grey Partridge. The park's animals face threats from poaching, habitat loss, and human-wildlife conflict.", "Sindh Ibex", "Striped Hyena", "Indian Lepord"], ["", "./image/01_a.jpg", "./image/01_b.jpg", "./image/01_c.jpg"], "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3417.5058576468614!2d67.5205964!3d25.6910637!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394b4f048eb7aad1%3A0xa48e1eddb3545227!2sKhirthar%20National%20Park!5e1!3m2!1sen!2s!4v1717059674014!5m2!1sen!2s");
    };
    document.getElementById("read2").onclick = function () {
        showDetails("details2", "read2", ["Hingol National Park in Balochistan, Pakistan, shelters diverse fauna, including the critically endangered Arabian Leopard and the Marsh Crocodile. Its wildlife faces challenges from habitat degradation and illegal hunting.", "Arabian Leopard", "Marsh Crocodile", "Indian Wolf"], ["", "./image/02_a.jpg", "./image/02_b.jpg", "./image/02_c.jpg"],"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109535.18635682236!2d65.32367467335797!3d25.499816251119576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb6f8234999a189%3A0xa3e223a3f7b71ae6!2sHingol%20Balochistan%20National%20Park!5e1!3m2!1sen!2s!4v1717059986854!5m2!1sen!2s");
    };
    document.getElementById("read3").onclick = function () {
        showDetails("details3", "read3", ["Khunjerab National Park, situated in Pakistan's Gilgit-Baltistan region, is home to iconic species like the Snow Leopard and the Himalayan Ibex, thriving in its high-altitude habitats. Conservation efforts aim to protect these animals from threats like poaching and habitat fragmentation.", "Snow Leopard", "Himalayan Ibex", "Brown Bear"], ["", "./image/03_a.jpg", "./image/03_b.jpg", "./image/03_c.jpg"],"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1565485.6665934508!2d73.77653989199639!3d36.26981474409434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ef7c01d780137d%3A0xfafc7aeff52f20ed!2sKhunjerab%20National%20Park!5e1!3m2!1sen!2s!4v1717060244183!5m2!1sen!2s");
    };
    document.getElementById("read4").onclick = function () {
        showDetails("details4", "read4", ["Chitral Gol National Park in Pakistan is inhabited by the endangered Kashmir Markhor, prized for its distinct spiral horns, and the elusive Snow Leopard, adapted to the park's rugged terrain, representing its rich biodiversity.", "Kashmir Markhor", "Golden Eagle (Aquila Chrysaetos)", "Himalayan Monal"], ["", "./image/04_a.jpg", "./image/04_b.jpg", "./image/04_c.jpg"],"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.207901224384!2d71.68904557560185!3d35.89480587251902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38c4b320ea4a59bd%3A0x87087be0e33d7c4f!2sChitral%20Gol%20National%20Park!5e1!3m2!1sen!2s!4v1717060501952!5m2!1sen!2s");
    };
    document.getElementById("read5").onclick = function () {
        showDetails("details5", "read5", ["Ayub National Park in Rawalpindi, Pakistan, hosts a variety of animals, including the Indian Peafowl, known for its vibrant plumage, and the Spotted Deer, which roams the park's grasslands and wooded areas, adding to its ecological diversity.", "Indian Peafowl", "Deer", "Rhesus Macaque (Macaca Mulatta)"], ["", "./image/05_a.jpg", "./image/05_b.jpg", "./image/05_c.jpg"],"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13297.283535146977!2d73.07273071738281!3d33.5710169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9333e7d5253f%3A0x69ab3f96450f3d34!2sAyub%20National%20Park!5e0!3m2!1sen!2s!4v1717058891316!5m2!1sen!2s");
    };
    document.getElementById("read6").onclick = function () {
        showDetails("details6", "read6", ["Chinji National Park in Punjab, Pakistan, is home to diverse wildlife including the Urial, a wild sheep with impressive horns, and the Indian Pangolin, an elusive and scaly mammal. The park's unique dry sub-tropical ecosystem supports these and other species.", "Indian Pangolin", "Grey Partridge", "Desert Monitor"], ["", "./image/06_a.jpg", "./image/06_b.jpg", "./image/06_c.jpg"],"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.7639979432693!2d72.37287817545477!3d32.660437473712555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39209047c9017c77%3A0x9fe27aa6683d3710!2sChinji%20National%20Park!5e1!3m2!1sen!2s!4v1717059390994!5m2!1sen!2s");
    };
        document.getElementById("read7").onclick = function () {
        showDetails("details7", "read7", ["Badlands National Park in South Dakota, USA, is home to a variety of wildlife including the American Bison, which roams its grasslands, and the Black-footed Ferret, a rare and endangered species that preys on prairie dogs. The park's unique landscape supports these and many other species.", "American Bison", "Black-Footed Ferret", "Prairie Rattlesnake"], ["", "./image/07_a.jpg", "./image/07_b.jpg", "./image/07_c.jpg"],"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87520.16148011819!2d-102.40684788497909!3d43.848052001395175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x877e870c18052023%3A0x69685e31dae677f0!2sBadlands%20National%20Park!5e1!3m2!1sen!2s!4v1717060810903!5m2!1sen!2s");
    };
    document.getElementById("read8").onclick = function () {
        showDetails("details8", "read8", ["Deosai National Park in Gilgit-Baltistan, Pakistan, is renowned for its populations of the Himalayan Brown Bear, a threatened species, and the Tibetan Wolf, which roams its vast alpine meadows. The parks high-altitude plains provide a unique habitat for these and other wildlife species.", "Tibetan Wolf", "Brown-Headed Gull", "Common kestrel"], ["", "./image/08_a.jpg", "./image/08_b.jpg", "./image/08_c.jpg"],"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199359.55763866642!2d75.30672832992839!3d34.97050368869668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e38bb6f78c2f95%3A0x91d536c155585ae!2sDeosai%20National%20Park!5e1!3m2!1sen!2s!4v1717061142365!5m2!1sen!2s");
    };
    
});
