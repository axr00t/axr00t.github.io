import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mr. Robot CTF Writeup | AXROOT",
  description: "Writeup detalhado da máquina Mr. Robot do VulnHub, explorando vulnerabilidades e técnicas de exploração.",
}

export default function MrRobotArticle() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Mr. Robot CTF Writeup</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p>
                Mr Robot is one of my favorite tv series, I've watched more than 5 times every season :) 
                This CTF has 3 flags that we must find, let's start.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">~$ cat First_Flag</h2>
            <p>
                Accessing the ip we have a site with a terminal where we can execute certain commands but there is 
                nothing useful here for us. So we start by enumerating the ports and services with nmap but not returning 
                anything interesting. Then I use FFUF to enumerate directories.
            </p>
            <p>
                While the command was running in the background I have the habit of always looking at the robots.txt directory. 
                Accessing it we find two files, a wordlist and a key with our first flag! Then we download the two files:
            </p>
            <ul>
              <li>key-1-of-3.txt</li>
              <li>fsociety.txt</li>
            </ul>
            <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
              <code>
                wget IP/key-1-of-3.txt
              </code>
            </pre>
            <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
              <code>
                wget IP/fsociety.txt
              </code>
            </pre>
            <p>
                After downloading both files and reading key-1-of-3.txt we get our first flag.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">~$ cat Second_Flag</h2>
            <p>
                To find the second flag, after finishing FUFF you will have found the wp-admin directory. 
                Accessing we have the wordpress login panel:
            </p>
            <img src="https://i.imgur.com/7Okkecs.png" alt="Wordpress Login" style={{ width: '600px' }} />
            <p>
                Here it is very clear what we need to do :) Let's perform a brute force attack using that fsociety.dic 
                file we found earlier. To perform the brute force I will use wpscan
            </p>
            <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
              <code>
                wpscan --url 10.10.240.155 --passwords fsociety.dic --usernames fsociety.dic
              </code>
            </pre>
            <p>
                After running the command we get the password and the username. Now we can access the panel.
                After logging in, we'll send a php reverse-shell.
            </p>
            <p>
                To upload our reverse shell, go to Appearance-Editor and select some php page, 
                delete everything and paste our code (don't forget to change the ip and port).
                After just click the Update File button below to save your changes.
            </p>
            <img src="https://i.imgur.com/I8Upsof.png" alt="Wordpress Appearance Editor" style={{ width: '600px' }} />
            <p>
                After just click the Update File button below to save your changes.
                Using netcat listening to the port we defined in the reverse shell,
                just access the page that we changed and so we get our shell :)
            </p>
            <img src="https://i.imgur.com/WuvhM52.png" alt="Reverse Shell Upload" style={{ width: '600px' }} />
            <p>
                Accessing /home we see that there is a user called robot and inside it we have two files: The flag 2 and an MD5 password
            </p>
            <img src="https://i.imgur.com/SEaC3cX.png" alt="/home Files" style={{ width: '600px' }} />
            <p>
                Accessing /home we see that there is a user called robot and inside it we have two files: The flag 2 and an MD5 password.
            </p>
            <p>
                Now we need to crack the MD5 password of the user robot. Cracking it, we get the robot user password and now we access the user.
            </p>
            <img src="https://i.imgur.com/ZgTUjy6.png" alt="Robot User Login" style={{ width: '400px' }} />
            <p>
                Now we can read the key-2-of-3.txt file and get our second flag!
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">~$ cat Last_Flag</h2>
            <p>
                To get the third flag we have to gain root access on the machine. By doing the enumeration we can see
                that it is possible to use nmap to escalate privileges:
            </p>
            <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
              <code>
                find / -user root -perm -4000 2&gt;/dev/null
              </code>
            </pre>
            <img src="https://i.imgur.com/tsJFQ41.png" alt="Nmap Privilege Escalation" style={{ width: '500px' }} />
            <img src="https://i.imgur.com/SUtTulK.png" alt="GTFObins Nmap" style={{ width: '500px' }} />
            <p>
                Let's use nmap's interactive mode to escalate privilege.
            </p>
            <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
              <code>
                nmap --interactive
              </code>
            </pre>
            <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
              <code>
                nmap&gt; !sh
              </code>
            </pre>
            <img src="https://i.imgur.com/hwWu6z5.png" alt="Root Shell" style={{ width: '500px' }} />
            <p>
                Now we can read the /root/key-3-of-3.txt file and get our last flag!
            </p>
          </section>
        </div>
      </div>
    </div>
  )
} 