import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Plus, Trash2, Upload } from "lucide-react";
import { toast } from "sonner";

interface ChatbotTrainingProps {
  chatbot: any;
}

export function ChatbotTraining({ chatbot }: ChatbotTrainingProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [trainingData, setTrainingData] = useState([
    { question: "", answer: "" },
  ]);

  const handleAddPair = () => {
    setTrainingData([...trainingData, { question: "", answer: "" }]);
  };

  const handleRemovePair = (index: number) => {
    setTrainingData(trainingData.filter((_, i) => i !== index));
  };

  const handleChange = (
    index: number,
    field: "question" | "answer",
    value: string
  ) => {
    const newData = [...trainingData];
    newData[index][field] = value;
    setTrainingData(newData);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Simulated API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Training data saved successfully");
    } catch (error) {
      toast.error("Failed to save training data");
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Handle CSV/JSON upload
      toast.success("File uploaded successfully");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Training Data</h3>
        <div className="flex space-x-2">
          <Input
            type="file"
            accept=".csv,.json"
            className="hidden"
            id="file-upload"
            onChange={handleFileUpload}
          />
          <Button
            variant="outline"
            onClick={() => document.getElementById("file-upload")?.click()}
          >
            <Upload className="h-4 w-4 mr-2" />
            Import CSV/JSON
          </Button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {trainingData.map((pair, index) => (
          <div
            key={index}
            className="grid gap-4 p-4 border rounded-lg relative"
          >
            {index > 0 && (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2"
                onClick={() => handleRemovePair(index)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
            <div className="space-y-2">
              <Label>Question/Prompt</Label>
              <Input
                value={pair.question}
                onChange={(e) =>
                  handleChange(index, "question", e.target.value)
                }
                placeholder="Enter a sample user question"
              />
            </div>
            <div className="space-y-2">
              <Label>Answer/Response</Label>
              <Textarea
                value={pair.answer}
                onChange={(e) =>
                  handleChange(index, "answer", e.target.value)
                }
                placeholder="Enter the desired chatbot response"
              />
            </div>
          </div>
        ))}

        <Button
          type="button"
          variant="outline"
          onClick={handleAddPair}
          className="w-full"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Question-Answer Pair
        </Button>

        <Button type="submit" disabled={isLoading} className="w-full">
          {isLoading ? "Saving..." : "Save Training Data"}
        </Button>
      </form>
    </div>
  );
}