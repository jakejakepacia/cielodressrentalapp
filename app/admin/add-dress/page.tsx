"use client";

export default function AddDressPage() {
  return (
    <div className=" flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md border rounded-xl p-6 bg-white shadow-sm space-y-4">
        {/* Title */}
        <h1 className="text-xl font-semibold text-center">Add New Dress</h1>

        <form className="space-y-4 text-sm">
          {/* Name */}
          <div>
            <label className="text-xs text-gray-500">Name</label>
            <input
              type="text"
              name="name"
              className="border rounded-md px-3 py-2 w-full"
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-xs text-gray-500">Description</label>
            <textarea
              name="description"
              rows={2}
              className="border rounded-md px-3 py-2 w-full"
            />
          </div>

          {/* Prices */}
          <div className="grid grid-cols-2 gap-3">
            <input
              type="number"
              name="priceDaily"
              placeholder="Daily Price"
              className="border rounded-md px-3 py-2"
            />
            <input
              type="number"
              name="priceWeekly"
              placeholder="Weekly Price"
              className="border rounded-md px-3 py-2"
            />
          </div>

          {/* Category + Size */}
          <div className="grid grid-cols-2 gap-3">
            <select name="category" className="border rounded-md px-3 py-2">
              <option value="Birthday">Birthday</option>
              <option value="Christening">Christening</option>
              <option value="Photoshoot">Photoshoot</option>
              <option value="Wedding">Wedding</option>
            </select>

            <select name="size" className="border rounded-md px-3 py-2">
              <option value="1yr">1yr</option>
              <option value="2yrs">2yrs</option>
              <option value="3yrs">3yrs</option>
            </select>
          </div>

          {/* Flags */}
          <div className="flex justify-between text-xs">
            <label className="flex items-center gap-2">
              <input type="checkbox" name="featured" />
              Featured
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" name="isNew" defaultChecked={true} />
              New
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:opacity-90"
          >
            Add Dress
          </button>
        </form>
      </div>
    </div>
  );
}
