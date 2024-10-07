import React from 'react'
import { AlertCircle } from 'lucide-react'

const Notification = ({ message }) => {
  return (
    <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg flex items-center">
      <AlertCircle size={20} className="mr-2" />
      {message}
    </div>
  )
}

export default Notification