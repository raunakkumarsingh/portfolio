import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="DSA Sheet"
          des=" Ultimate solution for Interview
          preperation contains all tranding sheets."
          listItem={["React", "Node", "MongoDB","Express","JWT Auth"]}
          link="https://dsasheet.vercel.app/"
          github="https://github.com/raunakkumarsingh/DSA-Sheet"
        />
        <ArchiveCard
          title="Blockchain_Wallet"
          des=" It is a Node.js package, simplifies Bitcoin wallet management and blockchain interaction. It facilitates BIP39 mnemonic wallet creation and importing, wallet listing, and retrieval of Bitcoin balances and transactions via the BlockCypher API. "
          listItem={["Node", "Express", "BIP39", "Better-sqlite3"]}
          link="https://github.com/raunakkumarsingh/Blockchain_Storage"
          github="https://github.com/raunakkumarsingh/Blockchain_Storage"
        />
        <ArchiveCard
          title="FACTS-H"
          des="The FACTS-H lab's responsive research website presents ongoing research, publications, and collaborations in a user-friendly format, accessible across all devices."
          listItem={["Nextjs", "Tailwind CSS", "next-router"]}
          link="https://factsh.iiitkottayam.ac.in/"
          github="https://github.com/raunakkumarsingh/FactsH"
        />
       
         <ArchiveCard
                title="NEST Hackathon"
                des="An MT-MX converter transforms old MT103 payment receipts into Pacs008 format using microservices. It establishes secure communication via REST API endpoints, implemented in Docker containers, and hosted on AWS for scalability."
                listItem={["Node", "Regex", "Docker","Nginx","AWS"]}
                link="https://github.com/raunakkumarsingh/NEST"
                github="https://github.com/raunakkumarsingh/NEST"
              />
       
         <ArchiveCard
                title="Blockchain_Storage"
                des="Drive on Blockchain provides a secure platform for storing camera-detected crime footage on the blockchain, ensuring tamper-proof records and enabling easy accessibility via API for authorized users. "
                listItem={["Reactjs", "Node", "Hardhat","IPFS"]}
                link="https://github.com/raunakkumarsingh/Blockchain_Storage"
                github="https://github.com/raunakkumarsingh/Blockchain_Storage"
              />
        
        <ArchiveCard
          title="JWT Authentication"
          des="Login Signup With complete authentication with JWT Token automatic logout after 1 min with complete documantation"
          listItem={["React", "Node", "Express","JWT Auth"]}
          link="https://authentication-client-dusky.vercel.app/"
          github="https://github.com/raunakkumarsingh/authentication"
        />

        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
               <ArchiveCard
          title="INoteBook"
          des=" Web application built on the MEAN
          (MongoDB, Express, Angular, Node)
          stack with the intention of providing
          Northeastern students a better
          experience browsing the courses offered
          at Northeastern."
          listItem={["Reactjs", "Node", "JWT Auth", "Bootstrap"]}
          link="https://github.com/raunakkumarsingh/inotebook"
          github="https://github.com/raunakkumarsingh/inotebook"
        />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
               <ArchiveCard
          title="News API"
          des="Show Real-Time News.with proper
          category wise."
          listItem={["Reactjs", "Bootstrap", "News API"]}
          link="https://github.com/raunakkumarsingh/News"
          github="https://github.com/raunakkumarsingh/News"
        />
            </motion.div>
           
           
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Archive;
