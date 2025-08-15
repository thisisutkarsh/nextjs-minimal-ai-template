"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { LoadingSpinner } from "@/components/common/LoadingSpinner";
import { copyToClipboard, generateId } from "@/lib/utils/common";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [generatedId, setGeneratedId] = useState("");

  const handleShowToast = () => {
    toast.success("Hello from Sonner!", {
      description: "This is a beautiful toast notification",
    });
  };

  const handleShowErrorToast = () => {
    toast.error("Something went wrong!", {
      description: "Please try again later",
    });
  };

  const handleShowInfoToast = () => {
    toast.info("Here's some information", {
      description: "This is an informational toast",
    });
  };

  const handleShowWarningToast = () => {
    toast.warning("Warning!", {
      description: "This is a warning message",
    });
  };

  const handleAsyncOperation = async () => {
    setIsLoading(true);
    try {
      // Simulate async operation
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success("Async operation completed!", {
        description: "The operation was successful",
      });
    } catch (error) {
      toast.error("Async operation failed!", {
        description: "Something went wrong during the operation",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerateId = () => {
    const id = generateId();
    setGeneratedId(id);
    toast.success("ID Generated!", {
      description: "A new ID has been generated",
    });
  };

  const handleCopyId = async () => {
    if (generatedId) {
      const success = await copyToClipboard(generatedId);
      if (success) {
        toast.success("Copied to clipboard!", {
          description: "The ID has been copied to your clipboard",
        });
      } else {
        toast.error("Failed to copy!", {
          description: "Could not copy to clipboard",
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-2xl">
        <div>
          <h1 className="text-6xl font-bold text-gray-800 mb-4">Hello World</h1>
          <p className="text-xl text-gray-600">
            A minimal Next.js template with modern features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-700">Toast Examples</h2>
            <div className="space-y-3">
              <button
                onClick={handleShowToast}
                className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Success Toast
              </button>

              <button
                onClick={handleShowErrorToast}
                className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Error Toast
              </button>

              <button
                onClick={handleShowInfoToast}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Info Toast
              </button>

              <button
                onClick={handleShowWarningToast}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Warning Toast
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-700">Utility Examples</h2>
            <div className="space-y-3">
              <button
                onClick={handleAsyncOperation}
                disabled={isLoading}
                className="w-full bg-purple-500 hover:bg-purple-600 disabled:bg-purple-300 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <LoadingSpinner size="sm" className="mr-2" />
                    Loading...
                  </>
                ) : (
                  "Async Operation"
                )}
              </button>

              <button
                onClick={handleGenerateId}
                className="w-full bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Generate ID
              </button>

              {generatedId && (
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">Generated ID:</p>
                  <div className="flex items-center space-x-2">
                    <code className="bg-gray-100 px-3 py-2 rounded text-sm flex-1 text-left">
                      {generatedId}
                    </code>
                    <button
                      onClick={handleCopyId}
                      className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-2 rounded text-sm transition-colors"
                    >
                      Copy
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Built with Next.js, TypeScript, Tailwind CSS, and Sonner
          </p>
        </div>
      </div>
    </div>
  );
}
