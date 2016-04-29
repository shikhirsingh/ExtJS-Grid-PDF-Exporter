# Ext JS PDF Grid Exporter Sample

This is a sample application which shows how to export the data from a Grid to PDF using the pdfmake library. 


**Version History**

* v1.0 - Initial Release

**Author** 

* Updated By: [Shikhir Singh](http://www.shikhir.com/)


**Dependencies to compile**

* [Ext JS 6.0.2+](https://www.sencha.com/products/extjs/)
* [Sencha Cmd 6.1.2+](https://www.sencha.com/products/extjs/cmd-download/) 
* [Sencha Workspace](https://docs.sencha.com/cmd/6.x/workspaces.html) pre-configured with Ext JS 6.x+ located in workspace/ext 
* Sencha Exporter is currently part of Ext JS Premium and needs to be installed in the workspace/packages folder


**Wait, I just want to see how this app looks without compiling**

* Run it directly from github [here](https://rawgit.com/shikhirsingh/ExtJS-Grid-PDF-Exporter/master/build/index.html)


**Steps to install and run this application**


1. Ensure your Sencha Cmd version installed is greater than 6.1.2+
2. Ensure that the exporter plugin is installed in your [workspace](http://docs.sencha.com/cmd/6.x/workspaces.html)/packages/local/exporter directory.
3. Generate a new project via: sencha -sdk /path/to/ext6 generate app GridExportPdf [workspace](http://docs.sencha.com/cmd/6.x/workspaces.html)/GridExportPdf
4. Copy the content of the src folder in this report to the newly created project
5. Run the following command in the directory of this application: sencha app watch
6. Load the page in your browser: http://localhost:1841/GridExportPdf


**Troubleshooting Tips**

* Make sure your are placing the correct directory into your Sencha Cmd workspace. You need to put in just the src directory
* Ensure your workspace/ext directory is running Ext JS 6.x (not earlier build)
* Make sure you have installed the Sencha Exporter package. Currently it is bundled with Ext JS Pivot Grid addons, although Pivot grid is not a dependency


## Disclaimer

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING 
BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE 
AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR 
ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR 
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR 
OTHER DEALINGS IN THE SOFTWARE.
