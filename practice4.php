<?php
$size = isset($_REQUEST["table_size"]) ? intval($_REQUEST["table_size"]) : 0;

if ($size > 0) {
    echo "<!DOCTYPE html><html><head>";
    echo "<link rel='stylesheet' type='text/css' href='practice1.css'>";
    echo "<style>
        body { margin: 0; padding: 0; display: flex; justify-content: center; }
        table { border-collapse: collapse; margin-top: 10px; }
        th, td { border: 1px solid #333; padding: 8px 12px; text-align: center; }
        th { background-color: #e0e0e0; font-weight: bold; }
    </style>";
    echo "</head><body>";
    echo "<table>";

    // Column indexes row
    echo "<tr>";
    echo "<th>&nbsp;</th>";
    for ($col = 1; $col <= $size; $col++) {
        echo "<th>$col</th>";
    }
    echo "</tr>";

    // Rows with row indexes and products
    for ($row = 1; $row <= $size; $row++) {
        echo "<tr>";
        echo "<th>$row</th>";
        for ($col = 1; $col <= $size; $col++) {
            echo "<td>" . ($row * $col) . "</td>";
        }
        echo "</tr>";
    }

    echo "</table></body></html>";
}
?>
