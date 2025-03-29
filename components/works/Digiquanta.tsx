import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";
import { useState } from "react";

const Digiquanta = () => {
    const [showAll, setShowAll] = useState(false);

    const points = [
        "Developed a medical data extraction system using LLaMA 3.1 8B + PaddleOCR and Qwen 2.5VL 7B, converting unstructured medical documents into structured formats",
        "Built a medical chatbot assistant that interacts like a doctor, gathers symptoms, and suggests precautions and medicines in English, Telugu, and Hindi using OpenAI or Gemini API",
        "Designed a document parser capable of processing both scanned and non-scanned documents, reconstructing their original format, and extracting key insights",
        "Developed a real-time object detection tool to identify people count, age, and gender using camera feeds YOLOv8",
        "Created a video narration tool that understands video context, extracts key frames, generates scripts, converts text to speech, and overlays audio, supporting OpenAI, Gemini, and Ollama in multiple languages",
        "Fine-tuned a classifier model LayoutLMv3 to classify dynamic documents with varying orientations, enhancing accuracy with PaddleOCR for improved text understanding",
        "Benchmarked various Generative AI models (LLaMA, Qwen, Gemma, DeepSeek), OCR solutions (PaddleOCR, EasyOCR, SuryaOCR, Markdown OCR), and TTS (Bhasini, FineShare)",
    ];

    const visiblePoints = showAll ? points : points.slice(0, 2);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="w-full"
        >
            <h3 className="flex gap-1 font-medium text-xl font-titleFont">
                Software Developer
                <span className="text-textGreen tracking-wide">@DIGIQUANTA</span>
            </h3>
            <p className="text-sm mt-1 font-medium text-textDark">
                Jan 2025 - Present | Hyderabad, India
            </p>
            <ul className="mt-6 flex flex-col gap-3">
                {visiblePoints.map((point, index) => (
                    <li key={index} className="text-base flex gap-2 text-textDark">
                        <span className="text-textGreen mt-1">
                            <TiArrowForward />
                        </span>
                        {point}
                    </li>
                ))}
            </ul>
            <button
                onClick={() => setShowAll(!showAll)}
                className="mt-4 text-textGreen font-medium"
            >
                {showAll ? "Show Less" : "See All"}
            </button>
        </motion.div>
    );
};

export default Digiquanta;
