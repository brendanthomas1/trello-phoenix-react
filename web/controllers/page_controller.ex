defmodule TrelloPhoenixReact.PageController do
  use TrelloPhoenixReact.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
