using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace PracticeStuff.Data.Migrations
{
    public partial class service : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ServiceRequests",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CustomerName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ServiceRequests", x => x.Id);
                });

            migrationBuilder.AddColumn<int>(
                name: "ServiceRequestId",
                table: "Products",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Products_ServiceRequestId",
                table: "Products",
                column: "ServiceRequestId");

            migrationBuilder.AddForeignKey(
                name: "FK_Products_ServiceRequests_ServiceRequestId",
                table: "Products",
                column: "ServiceRequestId",
                principalTable: "ServiceRequests",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Products_ServiceRequests_ServiceRequestId",
                table: "Products");

            migrationBuilder.DropIndex(
                name: "IX_Products_ServiceRequestId",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "ServiceRequestId",
                table: "Products");

            migrationBuilder.DropTable(
                name: "ServiceRequests");
        }
    }
}
