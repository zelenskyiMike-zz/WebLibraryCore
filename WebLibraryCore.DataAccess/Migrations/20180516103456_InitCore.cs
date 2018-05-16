using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace WebLibraryCore.DataAccess.Migrations
{
    public partial class InitCore : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ArticleGenres",
                columns: table => new
                {
                    ArticleGenreID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ArticleGenreName = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ArticleGenres", x => x.ArticleGenreID);
                });

            migrationBuilder.CreateTable(
                name: "Authors",
                columns: table => new
                {
                    AuthorID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AuthorName = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Authors", x => x.AuthorID);
                });

            migrationBuilder.CreateTable(
                name: "BookGenres",
                columns: table => new
                {
                    GenreID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    GenreName = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BookGenres", x => x.GenreID);
                });

            migrationBuilder.CreateTable(
                name: "MagazineGenres",
                columns: table => new
                {
                    MagazineGenreID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    MagazineGenreName = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MagazineGenres", x => x.MagazineGenreID);
                });

            migrationBuilder.CreateTable(
                name: "PublicationGenres",
                columns: table => new
                {
                    PublicationGenreID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    PublicationGenreName = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PublicationGenres", x => x.PublicationGenreID);
                });

            migrationBuilder.CreateTable(
                name: "Articles",
                columns: table => new
                {
                    ArticleID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ArticleGenreID = table.Column<int>(nullable: false),
                    ArticleName = table.Column<string>(nullable: false),
                    DateOfArticlePublish = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Articles", x => x.ArticleID);
                    table.ForeignKey(
                        name: "FK_Articles_ArticleGenres_ArticleGenreID",
                        column: x => x.ArticleGenreID,
                        principalTable: "ArticleGenres",
                        principalColumn: "ArticleGenreID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Books",
                columns: table => new
                {
                    BookID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    BookName = table.Column<string>(nullable: false),
                    GenreID = table.Column<int>(nullable: false),
                    YearOfPublish = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Books", x => x.BookID);
                    table.ForeignKey(
                        name: "FK_Books_BookGenres_GenreID",
                        column: x => x.GenreID,
                        principalTable: "BookGenres",
                        principalColumn: "GenreID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Magazines",
                columns: table => new
                {
                    MagazineID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    DateOfMagazinePublish = table.Column<DateTime>(nullable: false),
                    MagazineGenreID = table.Column<int>(nullable: false),
                    MagazineName = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Magazines", x => x.MagazineID);
                    table.ForeignKey(
                        name: "FK_Magazines_MagazineGenres_MagazineGenreID",
                        column: x => x.MagazineGenreID,
                        principalTable: "MagazineGenres",
                        principalColumn: "MagazineGenreID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Publications",
                columns: table => new
                {
                    PublicationID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    DateOfPublicationPublish = table.Column<DateTime>(nullable: false),
                    PublicationGenreID = table.Column<int>(nullable: false),
                    PublicationName = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Publications", x => x.PublicationID);
                    table.ForeignKey(
                        name: "FK_Publications_PublicationGenres_PublicationGenreID",
                        column: x => x.PublicationGenreID,
                        principalTable: "PublicationGenres",
                        principalColumn: "PublicationGenreID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ArticleAuthor",
                columns: table => new
                {
                    ArticleID = table.Column<int>(nullable: false),
                    AuthorID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ArticleAuthor", x => new { x.ArticleID, x.AuthorID });
                    table.ForeignKey(
                        name: "FK_ArticleAuthor_Articles_ArticleID",
                        column: x => x.ArticleID,
                        principalTable: "Articles",
                        principalColumn: "ArticleID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ArticleAuthor_Authors_AuthorID",
                        column: x => x.AuthorID,
                        principalTable: "Authors",
                        principalColumn: "AuthorID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "BookAuthor",
                columns: table => new
                {
                    BookID = table.Column<int>(nullable: false),
                    AuthorID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BookAuthor", x => new { x.BookID, x.AuthorID });
                    table.ForeignKey(
                        name: "FK_BookAuthor_Authors_AuthorID",
                        column: x => x.AuthorID,
                        principalTable: "Authors",
                        principalColumn: "AuthorID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_BookAuthor_Books_BookID",
                        column: x => x.BookID,
                        principalTable: "Books",
                        principalColumn: "BookID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MagazineAuthor",
                columns: table => new
                {
                    MagazineID = table.Column<int>(nullable: false),
                    AuthorID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MagazineAuthor", x => new { x.MagazineID, x.AuthorID });
                    table.ForeignKey(
                        name: "FK_MagazineAuthor_Authors_AuthorID",
                        column: x => x.AuthorID,
                        principalTable: "Authors",
                        principalColumn: "AuthorID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_MagazineAuthor_Magazines_MagazineID",
                        column: x => x.MagazineID,
                        principalTable: "Magazines",
                        principalColumn: "MagazineID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PublicationAuthor",
                columns: table => new
                {
                    PublicationID = table.Column<int>(nullable: false),
                    AuthorID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PublicationAuthor", x => new { x.PublicationID, x.AuthorID });
                    table.ForeignKey(
                        name: "FK_PublicationAuthor_Authors_AuthorID",
                        column: x => x.AuthorID,
                        principalTable: "Authors",
                        principalColumn: "AuthorID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PublicationAuthor_Publications_PublicationID",
                        column: x => x.PublicationID,
                        principalTable: "Publications",
                        principalColumn: "PublicationID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ArticleAuthor_AuthorID",
                table: "ArticleAuthor",
                column: "AuthorID");

            migrationBuilder.CreateIndex(
                name: "IX_Articles_ArticleGenreID",
                table: "Articles",
                column: "ArticleGenreID");

            migrationBuilder.CreateIndex(
                name: "IX_BookAuthor_AuthorID",
                table: "BookAuthor",
                column: "AuthorID");

            migrationBuilder.CreateIndex(
                name: "IX_Books_GenreID",
                table: "Books",
                column: "GenreID");

            migrationBuilder.CreateIndex(
                name: "IX_MagazineAuthor_AuthorID",
                table: "MagazineAuthor",
                column: "AuthorID");

            migrationBuilder.CreateIndex(
                name: "IX_Magazines_MagazineGenreID",
                table: "Magazines",
                column: "MagazineGenreID");

            migrationBuilder.CreateIndex(
                name: "IX_PublicationAuthor_AuthorID",
                table: "PublicationAuthor",
                column: "AuthorID");

            migrationBuilder.CreateIndex(
                name: "IX_Publications_PublicationGenreID",
                table: "Publications",
                column: "PublicationGenreID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ArticleAuthor");

            migrationBuilder.DropTable(
                name: "BookAuthor");

            migrationBuilder.DropTable(
                name: "MagazineAuthor");

            migrationBuilder.DropTable(
                name: "PublicationAuthor");

            migrationBuilder.DropTable(
                name: "Articles");

            migrationBuilder.DropTable(
                name: "Books");

            migrationBuilder.DropTable(
                name: "Magazines");

            migrationBuilder.DropTable(
                name: "Authors");

            migrationBuilder.DropTable(
                name: "Publications");

            migrationBuilder.DropTable(
                name: "ArticleGenres");

            migrationBuilder.DropTable(
                name: "BookGenres");

            migrationBuilder.DropTable(
                name: "MagazineGenres");

            migrationBuilder.DropTable(
                name: "PublicationGenres");
        }
    }
}
