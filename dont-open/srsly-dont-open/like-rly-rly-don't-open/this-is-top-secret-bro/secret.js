let a = document.getElementById('hidden-content');
function hiddenScreen1() {
  let b = document.createElement('div');
  let c = document.createElement('h2');
  c.innerHTML = 'Congratulations Hacker!';
  let d = document.createElement('p');
  d.innerHTML = 'Ready to view some top-secret information?';
  let imIn = document.createElement('button');
  imIn.innerHTML = 'Hack In';
  imIn.onclick = hiddenScreen2;

  b.append(c, d);
  a.append(b, imIn);
}

function hiddenScreen2() {
  a.firstChild.lastChild.remove();
  a.firstChild.firstChild.innerHTML = 'Are you sure?';
  a.lastChild.onclick = hiddenScreen3;
}

function hiddenScreen3() {
  a.lastChild.remove();
  a.firstChild.firstChild.innerHTML =
    'Agree to the terms of service if you want to see the top-secret information';
  a.style.overflow = 'hidden';
  let e = document.createElement('div');
  e.style.margin = '15% auto';
  e.style.padding = '20px';
  e.style.width = '80%';
  e.style.maxHeight = '200px';
  e.style.border = '1px solid #888';
  e.style.overflow = 'scroll';
  e.style.fontSize = '12px';
  e.innerHTML = `
    <h2>Terms of Service</h2>
            <p>Welcome to Our Quirky World!</p>
            <p>By using this application, you agree to the following highly important and slightly absurd terms and conditions. Please read carefully, chuckle appropriately, and proceed with a sense of humor.</p>
            
            <h3>1. Acceptance of Terms</h3>
            <p>By registering or logging in, you agree that you are now a cherished member of our eccentric family. We might send you virtual hugs and random facts about narwhals.</p>
            
            <h3>2. Use of Information</h3>
            <p>Your personal information will be used in the following whimsical ways:</p>
            <ul>
                <li>To train a team of penguins to perform interpretive dances in your honor.</li>
                <li>To create a virtual avatar of you that will dominate every online trivia game.</li>
                <li>To develop a new line of gourmet popcorn flavors inspired by your dreams, including “Midnight Snack” and “Mystic Marshmallow.”</li>
            </ul>
            
            <h3>3. Data Sharing</h3>
            <p>We promise to share your data only with the most distinguished organizations, such as:</p>
            <ul>
                <li>The International Consortium of Balloon Animal Artists.</li>
                <li>The Society of Benevolent Dragons.</li>
                <li>The Federation of Witty Owls.</li>
            </ul>
            
            <h3>4. Data Security</h3>
            <p>Your data is protected by an elite team of cyber-guardians who double as world-class yodelers and part-time wizards.</p>
            
            <h3>5. User Responsibilities</h3>
            <p>As a user, you agree to:</p>
            <ul>
                <li>Always wear your funkiest socks while using our application. It’s for your enjoyment.</li>
                <li>Recite a limerick about tech support every Friday at noon.</li>
                <li>Participate in our annual “Dress Like Your Favorite Emoji Day,” complete with costume contests.</li>
            </ul>
            
            <h3>6. Cookies</h3>
            <p>We use cookies to:</p>
            <ul>
                <li>Determine your preferred shade of blue and adjust the interface accordingly.</li>
                <li>Track the number of times you’ve quoted “Monty Python” in casual conversation.</li>
                <li>Deliver personalized fortunes from our team of clairvoyant guinea pigs directly to your dashboard.</li>
            </ul>
            
            <h3>7. Limitation of Liability</h3>
            <p>In no event shall we be liable for:</p>
            <ul>
                <li>Any spontaneous fits of laughter caused by reading this document.</li>
                <li>The sudden appearance of disco lights and confetti in your workspace.</li>
                <li>Any insatiable cravings for non-existent popcorn flavors.</li>
            </ul>
            
            <h3>8. Termination</h3>
            <p>We reserve the right to terminate your account if:</p>
            <ul>
                <li>You fail to provide us with your favorite knock-knock joke during registration.</li>
                <li>You refuse to join our virtual dance party at least once a month.</li>
                <li>You deny the existence of friendly dragons.</li>
            </ul>
            
            <h3>9. Changes to the Terms</h3>
            <p>We may update these terms from time to time to reflect our latest imaginative ideas. We’ll notify you via a carrier pigeon or possibly a singing telegram delivered by a holographic unicorn.</p>
            
            <p>By continuing to use our application, you acknowledge that you’ve read, understood, and accepted these delightfully peculiar terms. Now go forth and enjoy, knowing that your data is in the hands of dreamers and jesters!</p>
            
            <p>For any questions or just to share your favorite joke, feel free to contact our support team, who are currently perfecting their stand-up comedy routines.</p>
            
            <p>Thank you for joining our whimsical world!</p>
  `;

  let f = document.createElement('button');
  let g = document.createElement('button');
  f.innerHTML = 'Agree';
  f.onclick = hiddenScreen4;
  g.innerHTML = 'Disagree';
  g.onclick = function () {
    location.reload();
  };
  a.append(e, f, g);
}
function hiddenScreen4() {
  let h = document.querySelector('body');
  h.innerHTML = `
  <iframe width="1200" height="800" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" frameborder="0" allowfullscreen ></iframe>
  `;
}
