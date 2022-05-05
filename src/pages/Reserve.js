const Reserve = () => (
  <div>
    <h1>Reserve an Airplane</h1>
    <p>
      You will have a form displayed in this page. You will be able to rent an
      Airplane using that form.
    </p>
    <p>Note: only admins should be able to add Airplanes.</p>
    <form>
            <div className="reserve-form">
              <div className="city-style">
                <select
                  id="cityId"
                  placeholder="city"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                >
                  <option>---Select City---</option>
                  {cities.map((city) => <option key={city.id}>{city.name}</option>)}
                </select>
              </div>
              <div className="date-style">
                <DropdownDate
                  startDate={
            TodayDate()
          }
                  endDate={
            extendDate(5)
          }
                  selectedDate={
            selectDate
          }
                  onDateChange={(date) => {
                    setSelectedDate(formatDate(date));
                  }}
                />
              </div>
              <button type="button" onClick={handleSubmit}>Reserve</button>
            </div>
    </form>
  </div>
);

export default Reserve;
