import { Metadata } from "next"

export const metadata: Metadata = {
  title: "How to become a Hacker | AXROOT",
  description: "Um guia completo sobre como se tornar um hacker, desde os conceitos básicos até técnicas avançadas de segurança ofensiva.",
}

export default function HowToBecomeHackerArticle() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold pt-4 mt-4 border-t border-white/30">How to become a "Hacker"</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold pt-4 mt-4 border-t border-white/30">Introduction</h2>
            <div className="flex justify-center">
              <img 
                src="https://i.imgur.com/kksEKYv.jpeg" 
                alt="Hacker Meme" 
                className="mb-4 rounded-lg"
                style={{ width: '100%', maxWidth: '500px' }}
              />
            </div>
            <p className="mb-4">
              First of all, let me introduce myself briefly. My name is Yoon (aka: axroot), I've been studying cybersecurity for about five years and have been working professionally in the field for almost three. Throughout my career, I've worked on both the defensive and offensive sides of security, and today I'm dedicated to the offensive side, which is my true passion.
            </p>
            <p className="mb-4">
              During this time, I've received many questions such as: <em>"How can I become a hacker?"</em> or <em>"How do I work with what you work with?"</em>. I always tried to help and guide with the knowledge I had, but I felt I could do more. I've long wanted to write something to help not only those who approach me directly, but also other people interested in entering the cybersecurity field. However, for a long time I put this idea to one side, thinking that I still didn't have enough experience - the famous <em>imposter syndrome</em>. Today, I feel more confident in my knowledge and believe I can contribute by sharing some of what I've learned along this journey.
            </p>
            <p className="mb-4">
              The aim of this article is to show the way for those wishing to enter the cybersecurity field, with a focus on offensive security. The field of cybersecurity is huge and has many sub-areas, but that's a topic for another day. Here, I want to share the advice I wish I had received at the beginning of my journey: how to study, what to study, where to find relevant content and how to prepare to enter the market with solid knowledge.
            </p>
            <p>
              Being a hacker goes far beyond the stereotype of someone typing frantically on a black screen full of code. At its heart, it's about critical thinking, creativity and, above all, a boundless curiosity to understand how systems work - and how they can be broken. Offensive security isn't just about exploiting vulnerabilities, it's about anticipating real attacks, testing defenses and strengthening security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold pt-4 mt-4 border-t border-white/30">Where to start?</h2>
            <div className="flex justify-center">
              <img 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjPoEsiLGph0H5BAV6xRvf5sp-X_hGjvk6nopg0C3AG3_j9YPwO0wJth-0A_OtWilbY3u3a2HvhIPFqbkAnV7k7BrmZk0apEbmLf4OamL4h1Fw_-eAdukoffvLUzgRq42-IMBtXCgTNvwF-vUnQtAMai7goyl2OR85JfswUuGxl6N2YnWIWFg/s1024/escada%20hacker.jpeg" 
                alt="Hacker Path" 
                className="mb-4 rounded-lg"
                style={{ width: '100%', maxWidth: '400px' }}
              />
            </div>
            <p className="mb-4">
              This is undoubtedly the hardest part. The field of cybersecurity is extremely vast and, unlike a few years ago, today we have a huge amount of free content and courses available on the internet. On the one hand, this is great, but on the other, it can leave you lost in a sea of information. So where to start? The answer is simple: <strong>the basics!</strong>
            </p>
            <p className="mb-4">
              Don't fall for the illusion that watching an hour-long video on YouTube will be enough to get you hacking away and applying for jobs. That's not how it works. Nor am I going to tell you that this is an easy area and that you'll be employed in a month's study - the reality is that cybersecurity is not an <em>introductory</em> area, it requires a solid foundation and a lot of prior knowledge.
            </p>
            <p className="mb-4">
              A common mistake for those starting out is to think that taking a 40-hour course will be enough to acquire all the knowledge needed to enter the market. Don't fall for these promises from "gurus". If you really want to stand out and become an outstanding professional, you need to <strong>master the basics</strong> first.
            </p>
            <p>
              But what exactly does "the basics" mean? It means having a good understanding of the fundamentals of computing, including networks, programming (yes, you need to know how to program if you want to be a good professional - I'll talk more about that later), operating systems and much more. Without this foundation, any more advanced knowledge will be inconsistent and difficult to apply.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold pt-4 mt-4 border-t border-white/30">Learning the Basics</h2>
            <p className="mb-4">
              Many people who want to get into cybersecurity are in a hurry to learn how to hack into systems, exploit flaws or carry out penetration tests. However, without a solid foundation, all this knowledge ends up being superficial and difficult to apply in practice. The truth is that offensive security isn't just about memorizing commands or following tutorials - you need to understand how technologies work before you learn how to exploit them.
            </p>
            <div className="flex justify-center">
              <img 
                src="https://i.imgur.com/jZQRsRT.png" 
                alt="Hacker Meme" 
                className="mb-4 rounded-lg"
                style={{ width: '100%', maxWidth: '500px' }}
              />
            </div>
            <p className="mb-4">
              Think of cybersecurity like the construction of a building. Before raising floors and installing complex systems, it is essential to have a well-structured foundation. In the same way, before you learn how to find and exploit vulnerabilities, you need to understand <strong>networks, operating systems, programming and the basic principles of information security</strong>. Ignoring this foundation will only hold you back in the long run, as you could end up relying on ready-made tools without really understanding what you're doing.
            </p>
            <p className="mb-8">
              Another common mistake beginners make is looking for shortcuts - watching a hacking tutorial on YouTube and thinking they're ready to work in the field. The reality is that the best professionals are those who master the fundamentals and can think outside the box to find creative solutions. <strong>Learning the basics well gives you autonomy, allows you to understand and create your own tools and, above all, sets you apart from the majority.</strong>
            </p>

            <h3 className="text-xl font-bold pt-2 mt-4 border-t border-white/30">1. Computer networks</h3>
            <p className="mb-4">
              The internet and practically all the systems we use today depend on networks to function. If you want to work in offensive security, understanding how communication between devices takes place is fundamental. Many attacks exploit flaws in network protocols, incorrect configuration of firewalls or exposure of insecure services.
            </p>
            <div className="bg-gray-800 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-bold mb-3">What to study?</h4>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>OSI model and TCP/IP</strong> → Understand how Internet communication is structured.</li>
                <li><strong>Main protocols</strong> → HTTP, HTTPS, DNS, ARP, ICMP, SSH, SMB, RDP, among others.</li>
                <li><strong>IP Addressing and Subnets</strong> → IPv4, IPv6, NAT and how packet routing works.</li>
                <li><strong>Network traffic analysis</strong> → Using tools such as Wireshark and tcpdump to inspect packets.</li>
                <li><strong>Common network attacks</strong> → ARP Spoofing, Man-in-the-Middle (MITM), Sniffing, etc.</li>
              </ul>
            </div>
            <p className="mb-8 italic">
              <strong>Tip:</strong> The best way to learn networking is to get hands-on! Install Wireshark and analyze packets from your own network, set up a small test environment with virtual machines and simulate scenarios.
            </p>

            <h3 className="text-xl font-bold pt-2 mt-4 border-t border-white/30">2. Operating Systems</h3>
            <p className="mb-4">
              A hacker needs to be familiar with the operating systems they intend to attack and protect. This means understanding how they work internally, what their vulnerabilities are and how to interact with them mainly via the command line.
            </p>
            <div className="bg-gray-800 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-bold mb-3">What to study?</h4>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Linux and Windows</strong> → These are the most common systems in corporate and server environments.</li>
                <li><strong>Essential terminal commands</strong> → Shell scripting on Linux, PowerShell on Windows.</li>
                <li><strong>Process management and permissions</strong> → How users, groups, privileges and access controls work.</li>
                <li><strong>System architecture</strong> → Filesystem, registries, services and logs.</li>
                <li><strong>Administration tools</strong> → Netcat, Nmap, Sysinternals, Task Manager, etc.</li>
              </ul>
            </div>
            <p className="mb-8 italic">
              <strong>Tip:</strong> Use Linux in your day-to-day life, whether in a virtual machine, installing WSL on Windows or dualbooting. Try running commands, exploring directories and understanding how the system responds.
            </p>

            <h3 className="text-xl font-bold pt-2 mt-4 border-t border-white/30">3. Programming and Scripting</h3>
            <p className="mb-4">
              If you want to become a real hacker, and not just someone who runs ready-made tools without understanding what's going on, learning to program is essential. Programming allows you to automate tasks, develop your own exploits and better understand the workings of the vulnerabilities you are exploiting.
            </p>
            <div className="bg-gray-800 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-bold mb-3">What to study?</h4>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Python</strong> → Essential language for automation scripts, exploit development and security analysis.</li>
                <li><strong>Bash and PowerShell</strong> → Scripts for task automation and system administration.</li>
                <li><strong>SQL</strong> → Understanding databases and SQL injection.</li>
                <li><strong>Javascript and Web</strong> → For those wishing to work in web application security.</li>
              </ul>
            </div>
            <p className="mb-8 italic">
              <strong>Tip:</strong> Start by writing small scripts to automate simple tasks. Try creating a port scanner in Python or a Bash script to monitor Linux processes.
            </p>

            <h3 className="text-xl font-bold pt-2 mt-4 border-t border-white/30">4. Information Security Concepts</h3>
            <p className="mb-4">
              Finally, it is essential to understand the basic principles of information security and the main types of attacks that are used in the real world. This will help you to think offensively and defensively at the same time.
            </p>
            <div className="bg-gray-800 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-bold mb-3">What to study?</h4>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>CIA Triad</strong> → Confidentiality, Integrity and Availability - Basis of information security.</li>
                <li><strong>Types of threats</strong> → Malware, phishing, social engineering attacks, etc.</li>
                <li><strong>Exploiting vulnerabilities</strong> → Buffer overflow, XSS, SQL Injection, etc.</li>
                <li><strong>Cryptography</strong> → How the main algorithms work and their application in security.</li>
                <li><strong>Pentest methodologies</strong> → OWASP, PTES, NIST, etc.</li>
              </ul>
            </div>
            <p className="mb-4 italic">
              <strong>Tip:</strong> Follow sites like OWASP and CVE Details to keep up to date with new vulnerabilities and understand how they work.
            </p>
            <p>
              These are the fundamental pillars for anyone who wants to get into offensive security. You don't need to master everything at once, but you should start studying each of these topics with dedication.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold pt-4 mt-4 border-t border-white/30">Where to study</h2>
            <p className="mb-4">
              Okay, now you're probably wondering: where can you find all this content? Fortunately, there are several excellent platforms that cover these topics, both theoretically and practically. Two that I like and recommend the most are <strong>TryHackMe</strong> and <strong>Hack The Box</strong>. Both offer free content, but most of the material, especially the most advanced, is paid for.
            </p>
            <p className="mb-4">
              If your budget allows it, I can tell you from my experience that it's worth investing in these platforms. They are structured in such a way as to provide practical, well-guided learning, as well as offering realistic simulation environments where you can test your skills in challenges that actually simulate real-world scenarios.
            </p>
            <p className="mb-4">
              However, I recommend that you choose <strong>just one of these platforms</strong>, depending on your budget. Subscribing to both isn't necessary and can actually be counterproductive, as you end up getting lost in so much content. The secret here is <strong>focus</strong>: choose one platform, subscribe and dedicate yourself to it.
            </p>
            <p className="mb-4">
              Okay, but what if I don't have any money? No problem! All the content offered by these platforms can be found for free on the internet. The big difference is that on paid platforms, the content is already <strong>selected</strong> and <strong>organized</strong> for you. Without a platform, you'll have to do this research and curation work yourself.
            </p>
            <p className="mb-4">
              If you want to learn about a particular topic, such as <strong>network security</strong> or <strong>Python programming</strong>, log into ChatGPT and ask it to create a learning strategy on the subject in topics. Then ask them to break down each topic and, where possible, ask for reference links to supporting material. This will give you a structured view of what you need to study and where to start.
            </p>
            <p className="mb-4">
              In addition, another effective strategy is to access platforms such as <strong>TryHackMe</strong> and <strong>Hack The Box</strong>, see the types of challenges and topics they cover, and then use ChatGPT to break down these topics. With the help of AI, you'll not only get organized content, but you'll also have access to free links and resources that address each of these points.
            </p>
            <p className="mb-4">
              This tip not only applies to those who want to study for free, but also to those who have already subscribed to the platforms. Even if you have access to paid content, don't feel limited to studying only the material published there. If you're on a topic and don't understand something, ask the artificial intelligence to explain it in a different way.
            </p>
            <p className="mb-4">
              Artificial intelligence can be a powerful <strong>complementary tool</strong>, offering detailed explanations as well as organizing your study, helping you to put together a well-structured and accessible learning plan.
            </p>
            <p className="italic">
              An important tip: if you have an academic email address, use it when registering on these platforms. Many of them offer <strong>discounts for students</strong>, which can represent significant savings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold pt-4 mt-4 border-t border-white/30">Roadmap</h2>
            <p className="mb-4">
              A common situation is for people to register on one of these platforms and end up feeling lost, especially as they offer a vast amount of different content and courses. With so many options, it's natural to get confused about which course to start and how to organize your studies efficiently.
            </p>
            <p className="mb-4">
              To help you through this process, I'm going to use the <strong>TryHackMe</strong> platform as an example, as it's the one I have the most experience with and the one I used myself when I was starting out. It's also the platform I recommend to my friends when they ask me where to study.
            </p>
            <p className="mb-4">
              Currently, at the time of publishing this article, <strong>TryHackMe</strong> itself offers a <strong>roadmap</strong> that guides the user on where to start and how to progress through the courses. This was created precisely to prevent beginners from feeling lost and knowing exactly which path to follow to delve deeper into the area.
            </p>
            <p className="mb-4">
              After registering, simply go to <a href="https://tryhackme.com/hacktivities?tab=roadmap" className="text-blue-500 hover:text-blue-600">https://tryhackme.com/hacktivities?tab=roadmap</a>, where you will find the <strong>complete roadmap</strong>. It presents a sequence of courses and activities, right from the start, to ensure that you build your knowledge base solidly. The roadmap also indicates the next steps as you complete each course.
            </p>
            <p>
              I've taken several of these courses myself and, in my opinion, the structure of the roadmap is well organized, offering a clear direction to follow. It's a great way to make sure you're learning what you really need to, without getting lost in all the options. If you're just starting out, this roadmap will be an excellent tool to make your learning journey smoother and more efficient.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold pt-4 mt-4 border-t border-white/30">Conclusion</h2>
            <p className="mb-4">
              Well, I hope that with this article you have a clearer idea of where to start in this incredible area of cybersecurity. More importantly, I hope you have understood the <strong>importance of not skipping steps</strong> and <strong>learning the basics well</strong>. Cybersecurity is a vast and challenging field, and every step you take in building a solid foundation will help you become a more competent and prepared professional.
            </p>
            <p className="mb-4">
              Remember, <strong>take your time</strong>. The learning journey is long, but extremely rewarding. Enjoy every moment and every challenge, because it's in the process that you really grow. The knowledge you accumulate along the way will be the foundation for your future achievements.
            </p>
            <p>
              Welcome to this fascinating world, where curiosity and persistence are your best allies. The road may be difficult, but the rewards, both in terms of learning and achievements, will be immense. Good luck on your journey, and remember: never stop learning!
            </p>
            <div className="flex justify-center">
              <img 
                src="https://i.imgur.com/xSXVPqx.png" 
                alt="Hacker Meme" 
                className="mb-4 rounded-lg"
                style={{ width: '100%', maxWidth: '400px' }}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 