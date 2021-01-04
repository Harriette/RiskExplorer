
<!-- Modal -->
<div class="modal fade" id="addRiskModal" tabindex="-1" aria-labelledby="Add risk modal" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="addRiskLabel">Add a new risk</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>


      <form class="addRisk" id="addRiskForm" method="post">
        <div class="modal-body">

          <div class="container-fluid">

            <div class="row">
              <div class="col-md-2">
                <div class="mb-3">
                  <label for="inputRiskID" class="form-label">Risk ID:</label>
                  <input type="text" name="inputRiskID" id="inputRiskID" class="form-control" value="" placeholder="Risk ID">
                </div>
              </div>

              <div class="col-md-10">
                <div class="mb-3">
                  <label for="inputRiskName" class="form-label">Name:</label>
                  <input type="text" name="inputRiskName" id="inputRiskName" class="form-control" value="" placeholder="Risk name">
                </div>
              </div>
            </div><!-- End row -->

            <div class="row">
              <div class="mb-3">
                <label for="inputRiskDescription" class="form-label">Description:</label>
                <textarea name="inputRiskDescription" id="inputRiskDescription" class="form-control" value="" placeholder="Risk description" rows="4"></textarea>
              </div>
            </div><!-- End row -->

            <div class="row">

              <div class="col-md-2">
                <div class="mb-3">
                  <label for="inputProbRating" class="form-label">Probability:</label>
                  <input type="number" name="inputProbRating" id="inputProbRating" class="form-control" value="" min="1" max="5">
                </div>
              </div>

              <div class="col-md-2">
                <div class="mb-3">
                  <label for="inputSevRating" class="form-label">Severity:</label>
                  <input type="number" name="inputSevRating" id="inputSevRating" class="form-control" value="" min="1" max="5">
                </div>
              </div>

              <div class="col-md-2">
                <div class="mb-3">
                  <label for="inputRepRating" class="form-label">Reputation:</label>
                  <input type="number" name="inputRepRating" id="inputRepRating" class="form-control" value="" min="1" max="5">
                </div>
              </div>

              <div class="col-md-2">
                <div class="mb-3">
                  <label for="selectRagRating" class="form-label">RAG:</label>
                  <select class="form-select" name="selectRAGRating" id="selectRAGRating" aria-label="Select RAG Rating">
                    <option value="1">Green</option>
                    <option value="2">Yellow</option>
                    <option value="3">Amber</option>
                    <option value="4">Red</option>
                  </select>
                </div>
              </div>

              <div class="col-md-2">
                <div class="mb-3">
                  <label for="inputRiskLevel" class="form-label">Risk Level:</label>
                  <input type="number" name="inputRiskLevel" id="inputRiskLevel" class="form-control" value="1" min="1">
                </div>
              </div>

              <div class="col-md-2">
                <div class="mb-3 form-check">
                  <input class="form-check-input" id="form-check-input" type="checkbox" value="" name="inputIsLoss">
                  <label class="form-check-label" for="inputIsLoss">Loss event</label>
                </div>
              </div>

            </div> <!-- End row -->

            <div class="row">

              <div class="col-md-4">
                <div class="mb-3">
                  <label for="inputCompany" class="form-label">Company:</label>
                  <input type="text" name="inputCompany" id="inputCompany" class="form-control" value="" placeholder="Company">
                </div>
              </div>

              <div class="col-md-4">
                <div class="mb-3 ui-widget">
                  <label for="inputDepartment" class="form-label">Department:</label>
                  <input type="text" name="inputDepartment" id="inputDepartment" class="form-control" value="" placeholder="Department">
                </div>
              </div>

              <div class="col-md-4">
                <div class="mb-3">
                  <label for="inputProcess" class="form-label">Process:</label>
                  <input type="text" name="inputProcess" id="inputProcess" class="form-control" value="" placeholder="Process">
                </div>
              </div>

            </div> <!-- End row -->

          </div>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-primary">Save changes</button>
        </div>
      </form>
    </div>
  </div>
</div>
