"use client";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CustomMarkdownSection({ onAdd }) {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);

  return (
    <div className="my-4">
      <Button type="button" onClick={() => setShow(v => !v)} className="mb-2">
        {show ? "Hide Custom Section" : "Add Custom Markdown Section"}
      </Button>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="space-y-2"
        >
          <Textarea
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Enter custom markdown (e.g. pinned repos, contact, etc.)"
            className="bg-white text-black border-blue-200 focus:ring-2 focus:ring-blue-500"
            rows={4}
          />
          <Button
            type="button"
            onClick={() => {
              if (value.trim()) {
                onAdd(value);
                setValue("");
                setShow(false);
              }
            }}
            className="bg-blue-700 text-white"
          >
            Add Section
          </Button>
        </motion.div>
      )}
    </div>
  );
}
