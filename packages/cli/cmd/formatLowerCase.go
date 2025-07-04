// Package cmd ...
package cmd

import (
	"fmt"
	"str/utils"
	"strings"

	"github.com/spf13/cobra"
)

// stringLowercaseCmd represents the stringLowercase command
var stringLowercaseCmd = &cobra.Command{
	Use:   "lowercase",
	Short: "A brief description of your command",
	Long: `A longer description that spans multiple lines and likely contains examples
and usage of using your command. For example:

Cobra is a CLI library for Go that empowers applications.
This application is a tool to generate the needed files
to quickly create a Cobra application.`,
	Run: func(cmd *cobra.Command, args []string) {
		utils.LogProgramName()
		// Get Text
		fmt.Print("Text: ")
		var text string
		fmt.Scanln(&text)
		// Uppercase
		fmt.Println(strings.ToLower(text))
	},
}

func init() {
	rootCmd.AddCommand(stringLowercaseCmd)

	// Here you will define your flags and configuration settings.

	// Cobra supports Persistent Flags which will work for this command
	// and all subcommands, e.g.:
	// stringLowercaseCmd.PersistentFlags().String("foo", "", "A help for foo")

	// Cobra supports local flags which will only run when this command
	// is called directly, e.g.:
	// stringLowercaseCmd.Flags().BoolP("toggle", "t", false, "Help message for toggle")
}
