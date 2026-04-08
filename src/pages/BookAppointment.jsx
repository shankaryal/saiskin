import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext.jsx';

export default function BookAppointment() {
  const { token } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    treatment: '',
    date: '',
    time: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      alert("Please login first to book an appointment");
      return;
    }

    setLoading(true);
    
    // Simulate booking (replace with real API call later)
    setTimeout(() => {
      alert(`Appointment booked successfully!\n\nTreatment: ${formData.treatment}\nDate: ${formData.date}\nTime: ${formData.time}`);
      setLoading(false);
      setFormData({ treatment: '', date: '', time: '' });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-cream py-12 md:py-20">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4">
            Book Your Appointment
          </h1>
          <p className="text-base md:text-lg text-gray-600">
            Choose your preferred treatment, date and time
          </p>
        </div>
        
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            <div>
              <label className="block text-sm font-medium mb-3 text-gray-700">
                Select Treatment
              </label>
              <select 
                name="treatment"
                value={formData.treatment}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-gold text-base"
              >
                <option value="">Choose a treatment</option>
                <option value="Laser Hair Removal">Laser Hair Removal</option>
                <option value="DYE SVL & DYE VL IPL">DYE SVL & DYE VL IPL</option>
                <option value="Chemical Peels">Chemical Peels</option>
                <option value="DermaLux Tri wave MD">DermaLux Tri wave MD</option>
                <option value="Bespoke Facial">Bespoke Facials</option>
                <option value="Skin Analyser Zemits">Skin Analyser Zemits</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-3 text-gray-700">
                  Preferred Date
                </label>
                <input 
                  type="date" 
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-gold text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-3 text-gray-700">
                  Preferred Time
                </label>
                <input 
                  type="time" 
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-gold text-base"
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-gold hover:bg-gold-dark disabled:bg-gray-400 text-black py-5 rounded-2xl font-semibold text-lg md:text-xl transition disabled:cursor-not-allowed"
            >
              {loading ? 'Processing Booking...' : 'Confirm Appointment'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}