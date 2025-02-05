import React, { useState } from 'react';
import { Button, Rating, Textarea } from "@material-tailwind/react";
import { toast } from 'react-toastify';
import axios from 'axios';

const RequestCard = ({ request, fetchFulfilledRequests }) => {
  const [showFeedback, setShowFeedback] = useState(false);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleSubmitFeedback = async () => {
    const feedbackData = {
      requestId: request.enquiryId, 
      rating,
      feedback,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/enquiry/${feedbackData.requestId}/feedback`, 
        feedbackData 
      );

      if (response.status !== 200) {
        throw new Error('Failed to submit feedback');
      }

      toast.success('Feedback submitted successfully!');
      fetchFulfilledRequests();

      setShowFeedback(false);
      setRating(0);
      setFeedback('');
    } catch (error) {
      console.error('Error submitting feedback:', error);
      toast.error('Failed to submit feedback, please try again.');
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 w-full max-w-sm mx-auto">
      <div className="p-4 sm:p-6">
        <div className="flex items-center justify-between mb-2 ">
          <h3 className="text-lg font-semibold text-gray-800 truncate">{request.requestFor}</h3>
          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
            request.isFulfilled ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
          }`}>
            {request.isFulfilled ? 'Fulfilled' : 'Pending'}
          </span>
        </div>

        {/* Display request ID */}
        <div className="text-xs text-gray-500 ">
          <span className="font-semibold">Request ID:</span> {request.enquiryId}
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center text-xs text-gray-500">
            <span>Requested on: {new Date(request.createdAt).toLocaleDateString()}</span>
          </div>
          <h4 className="mt-2 text-sm font-medium text-gray-700 mb-1">Message:</h4>
          <p className="text-sm text-gray-600 italic break-words">{request.message}</p>
        </div>

        {/* Show feedback or feedback form based on whether feedback exists */}
        {request.isFulfilled && !request.feedback ? (
  <>
    {!showFeedback ? (
      <Button 
        size="sm" 
        color="blue" 
        ripple="light"
        onClick={() => setShowFeedback(true)}
      >
        Give Feedback
      </Button>
    ) : (
      <div className="mt-4">
        <Rating value={rating} onChange={(value) => setRating(value)} />
        <Textarea
          color="blue"
          size="regular"
          outline={true}
          placeholder="Your feedback (max 200 characters)"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value.slice(0, 200))}
          className="mt-2"
        />
        <p className="text-xs text-gray-500">{feedback.length}/200</p>
        <div className="flex justify-end mt-2">
          <Button 
            size="sm" 
            color="green" 
            ripple="light"
            onClick={handleSubmitFeedback}
            disabled={rating === 0 || feedback.length === 0}
          >
            Submit Feedback
          </Button>
        </div>
      </div>
    )}
  </>
) : request.feedback ? (
  <div className="mt-4">
    <h4 className="text-sm font-medium text-gray-700">Your Feedback:</h4>
    <p className="text-sm text-gray-600">{request.feedback}</p>
    <div className="mt-2">
      <Rating value={request.rating} readonly />
    </div>
  </div>
) : null}

      </div>
    </div>
  );
};

export default RequestCard;
