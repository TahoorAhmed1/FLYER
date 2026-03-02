export default function PolicyWidgets() {
  return (
    <div className="bg-white shadow-sm border-y border-gray-200">
      <div className="container py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <span className="text-3xl">🚚</span>
            <div>
              <h4 className="font-semibold text-sm sm:text-base">Free Delivery</h4>
              <p className="text-xs text-gray-500">On order over $49.86</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <span className="text-3xl">🛡️</span>
            <div>
              <h4 className="font-semibold text-sm sm:text-base">Secure Payment</h4>
              <p className="text-xs text-gray-500">Secured information</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <span className="text-3xl">🎁</span>
            <div>
              <h4 className="font-semibold text-sm sm:text-base">Promotion Gift</h4>
              <p className="text-xs text-gray-500">Special offers!</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <span className="text-3xl">↩️</span>
            <div>
              <h4 className="font-semibold text-sm sm:text-base">Money Back</h4>    
              <p className="text-xs text-gray-500">30 days return</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}