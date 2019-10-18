class Footer extends React.Component {
  render() {
    return (
      <footer id="Footer" class="clearfix">
        <div class="widgets_wrapper">
          <div class="container footer-columns">
            <div class="column one">
              <aside class="widget_text widget widget_custom_html">
                <div class="textwidget custom-html-widget">
                  <div style="text-align: center;">
                    <p>
                      Happy Fiit 1
                      <br />
                      Łukasz Gleich
                    </p>

                    <h4 class="themecolor">444-333-222</h4>
                    <p>
                      Wolności 1
                      <br />
                      41-800 Zabrze
                      <br />
                      Nip: 433-2323-41212
                    </p>
                  </div>
                </div>
              </aside>
            </div>
            <div class="column one">
              <aside class="widget_text widget widget_custom_html">
                <div class="textwidget custom-html-widget">
                  <div style="text-align: center;">
                    <p>
                      Happy Fiit 2
                      <br />
                      Agnieszka Gleich
                    </p>
                    <h4 class="themecolor">444-333-222</h4>
                    <p>
                      Wolności 1
                      <br />
                      41-800 Zabrze
                      <br />
                      Nip: 433-2323-41212
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
        <div class="footer_copy">
          <div class="container">
            <div class="column one">
              <div class="copyright">Copyright &copy; Kamil Sobczyk 2019</div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

const domContainer = document.querySelector("#footer-component");
ReactDOM.render(<Footer />, domContainer);

const getFooter = () => (
  <footer id="Footer" class="clearfix">
    <div class="widgets_wrapper">
      <div class="container footer-columns">
        <div class="column one">
          <aside class="widget_text widget widget_custom_html">
            <div class="textwidget custom-html-widget">
              <div style="text-align: center;">
                <p>
                  Happy Fiit 1
                  <br />
                  Łukasz Gleich
                </p>

                <h4 class="themecolor">444-333-222</h4>
                <p>
                  Wolności 1
                  <br />
                  41-800 Zabrze
                  <br />
                  Nip: 433-2323-41212
                </p>
              </div>
            </div>
          </aside>
        </div>
        <div class="column one">
          <aside class="widget_text widget widget_custom_html">
            <div class="textwidget custom-html-widget">
              <div style="text-align: center;">
                <p>
                  Happy Fiit 2
                  <br />
                  Agnieszka Gleich
                </p>
                <h4 class="themecolor">444-333-222</h4>
                <p>
                  Wolności 1
                  <br />
                  41-800 Zabrze
                  <br />
                  Nip: 433-2323-41212
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
    <div class="footer_copy">
      <div class="container">
        <div class="column one">
          <div class="copyright">Copyright &copy; Kamil Sobczyk 2019</div>
        </div>
      </div>
    </div>
  </footer>
);
