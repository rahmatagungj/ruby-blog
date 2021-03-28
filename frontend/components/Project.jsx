import React, { Component } from "react";
import ProjectListSmall from "./commons/ProjectListSmall";

class Project extends Component {
  render() {
    const vues = "https://github.com/rahmatagungj/vuejs-todolist";
    const vanilla = "https://github.com/rahmatagungj/vanillajs-todolist";

    return (
      <React.Fragment>
        <div className="ct project">
          <div className="col-sm-4">
            <div className="row mb-2">
              <div className="project__list accent project__toke">
                <img
                  className="project__toke"
                  src="https://raw.githubusercontent.com/rahmatagungj/toke/main/Documentation/LOGO%20PANJANG.png"
                  width="100%"
                  alt="toke"
                />
                <a
                  href="https://github.com/rahmatagungj/toke"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="toke"
                >
                  <h1>Two Original Key Encryption (TOKE)</h1>
                </a>
                <span>
                  TOKE merupakan metode pengamanan melalui enkripsi data berupa
                  angka dan karakter, sistem ini menggunakan algoritma matematis
                  yang dapat digunakan untuk mengamankan pesan tertentu. Layanan
                  ini dapat mengubah pesan biasa dalam bahasa manusia dan file
                  menjadi data yang lebih aman. <br />
                  Untuk versi pengembangkan{" "}
                  <a
                    href="https://github.com/rahmatagungj/toke-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    alt="toke development"
                  >
                    disini
                  </a>
                  .
                </span>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <ProjectListSmall
              href="https://github.com/rahmatagungj/Slims9-Kuningan"
              title="Slims Perpustakaan Kabupaten"
              description="CMS Perpustakaan ini dibuat khusus untuk perpustakaan
                  kabupaten Kuningan di jawa barat."
            />
            <ProjectListSmall
              href="https://github.com/rahmatagungj/MTASA-server-launcher"
              title="MTA:SA Server Launcher"
              description="Aplikasi desktop yang dapat digunakan sebagai launcher server
                  di game MTA:SA."
            />
            <div className="row mb-2">
              <div className="project__list project__todos">
                <h1> Aplikasi My Todos</h1>
                <span>Aplikasi untuk mengelola agenda dan perencaan.</span>
                <div className="row mb-2">
                  <div className="col-sm-6 ">
                    <center>
                      <a
                        href={vues}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button__todos"
                      >
                        #1
                      </a>
                    </center>
                  </div>
                  <div className="col-sm-6">
                    <center>
                      <a
                        href={vanilla}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button__todos"
                      >
                        #2
                      </a>
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="row mb-2">
              <div className="project__list">Segera Hadir</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Project;
