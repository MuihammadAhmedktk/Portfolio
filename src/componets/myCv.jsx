import { useEffect, useState } from "react";
import { IoDownloadOutline } from "react-icons/io5";

const cvBaseName = "CV"; // Base name without extension
const possibleExtensions = ["pdf", "docx", "txt", "png", "jpg"]; // Add more if needed

const MyCv = () => {
  const [cvFile, setCvFile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkFileExists = async () => {
      for (const ext of possibleExtensions) {
        const filePath = `/${cvBaseName}.${ext}`;
        try {
          const response = await fetch(filePath, { method: "HEAD" });
          if (response.ok) {
            setCvFile(filePath);
            break;
          }
        } catch (error) {
          console.error(`Error checking file: ${filePath}`, error);
        }
      }
      setLoading(false);
    };

    checkFileExists();
  }, []);

  const handleDownload = () => {
    if (!cvFile) return;
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = cvFile.split("/").pop() || "download";
    // document.body.appendChild(link);
    link.setAttribute("target", "_blank"); // Open in a new tab to avoid issues
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      className="uppercase flex items-center gap-2 border-accent border px-4 py-2 rounded-full disabled:opacity-50"
      onClick={handleDownload}
      disabled={loading || !cvFile}
    >
      <div className="text-accent pt-1">
      {loading ? "Checking..." : "Download CV"}
      </div>
     
      <IoDownloadOutline className="text-xl text-accent" />
    </button>
  );
};

export default MyCv;
