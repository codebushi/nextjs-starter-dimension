import Head from "next/head";
import stylesheet from "styles/main.scss";
// import "../static/css/avatar.css";
import Icon from "../components/SVG-Jobless";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import ProfileImage from "../components/Profile-Image"

// import "../static/css/avatar.css";

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: "",
      loading: "is-loading",
      isDrawing: false,
    };
    this.handleOpenArticle = this.handleOpenArticle.bind(this);
    this.handleCloseArticle = this.handleCloseArticle.bind(this);
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: "" });
    }, 100);
  }

  draw = () => {
    this.setState((prevState) => ({
      isDrawing: !prevState.isDrawing,
    }));
  };

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  handleOpenArticle(article) {
    if(this.state.isDrawing){this.draw()}
    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article,
    });

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      });
    }, 325);

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout,
      });
    }, 350);
  }

  handleCloseArticle() {
    this.draw()
    this.setState({
      articleTimeout: !this.state.articleTimeout,
    });

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout,
      });
    }, 325);

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: "",
      });
    }, 350);
  }
  render() {
    return (
      <div
        className={`body ${this.state.loading} ${
          this.state.isArticleVisible ? "is-article-visible" : ""
        }`}
      >
        <div>
          <Head>
            <title>Next.js Starter</title>
            <link
              href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i"
              rel="stylesheet"
            />

            <link
              rel="apple-touch-icon"
              sizes="57x57"
              href="/static/favicon-profile/apple-icon-57x57.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="60x60"
              href="/static/favicon-profile/apple-icon-60x60.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="72x72"
              href="/static/favicon-profile/apple-icon-72x72.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="76x76"
              href="/static/favicon-profile/apple-icon-76x76.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="114x114"
              href="/static/favicon-profile/apple-icon-114x114.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="120x120"
              href="/static/favicon-profile/apple-icon-120x120.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="144x144"
              href="/static/favicon-profile/apple-icon-144x144.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="152x152"
              href="/static/favicon-profile/apple-icon-152x152.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/static/favicon-profile/apple-icon-180x180.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="192x192"
              href="/static/favicon-profile/android-icon-192x192.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/static/favicon-profile/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="96x96"
              href="/static/favicon-profile/favicon-96x96.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/static/favicon-profile/favicon-16x16.png"
            />
            <link rel="manifest" href="/static/favicon-profile/manifest.json" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta
              name="msapplication-TileImage"
              content="/static/favicon-profile/ms-icon-144x144.png"
            />
            <meta name="theme-color" content="#ffffff" />
          </Head>

          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <div id="wrapper">
            <ProfileImage
              loading={this.state.loading}
              isDrawing={this.state.isDrawing}
            />
            <Icon draw={this.draw} isDrawing={this.state.isDrawing} />

            <Header
              draw={this.state.isDrawing}
              isDrawing={this.draw}
              onOpenArticle={this.handleOpenArticle}
              timeout={this.state.timeout}
            />
            <Main
              isArticleVisible={this.state.isArticleVisible}
              timeout={this.state.timeout}
              articleTimeout={this.state.articleTimeout}
              article={this.state.article}
              onCloseArticle={this.handleCloseArticle}
            />
            <Footer timeout={this.state.timeout} />
          </div>

          <div id="bg" />
        </div>
      </div>
    );
  }
}

export default IndexPage;
